import React, { Component, createElement } from "react";
import { SafeAreaView, Platform } from "react-native";
import NavigationBarTheme from "./components/NavigationBarTheme";

export class CustomSafeAreaView extends Component {
    render() {
        return (
            <>
                {Platform.OS === 'ios' ? <SafeAreaView style={{ flex: 0, backgroundColor: this.props.topNotchColor.value }} /> : null}
                <NavigationBarTheme {...this.props}/>
                <SafeAreaView style={{ flex: 1 }}>{this.props.content}</SafeAreaView>
                <SafeAreaView style={{ flex: 0, backgroundColor: this.props.bottomNotchColor.value }} />
            </>
        );
    }
}
