// eslint-disable-next-line no-unused-vars
import React, { createElement } from "react";
import { StatusBar, StyleSheet, View } from "react-native";

const BAR_HEIGHT = StatusBar.currentHeight;

console.log("Bar height: ", BAR_HEIGHT);

const styles = StyleSheet.create({
    statusBar: {
        height: BAR_HEIGHT
    }
});

const AppStatusBar = ({ backgroundColor }) => (
    <View style={[styles.statusBar, backgroundColor]}>
        <StatusBar
            translucent
            backgroundColor={
                backgroundColor === null ? "transparent" : backgroundColor === "" ? "transparent" : backgroundColor
            }
            barStyle={
                backgroundColor === "transparent"
                    ? "light-content"
                    : backgroundColor === null
                    ? "dark-content"
                    : "dark-content"
            }
        />
    </View>
);

export default AppStatusBar;
