/* eslint-disable sort-imports */
/* eslint-disable no-console */
import { Component, createElement } from "react";
import { View, StyleSheet } from "react-native";
import { withNavigation } from "react-navigation";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderTopWidth: 0,
    }
});

class MenuAdvanced extends Component {
    renderIcons(navigation) {
        return this.props.menuItem.map(item => {
            return navigation.state.params.pageName === item.title ? item.contentActive : item.contentInactive;
        });
    }

    render() {
        const { navigation } = this.props;
        return <View style={[styles.container, this.props.style[0].container]}>{this.renderIcons(navigation)}</View>;
    }
}

export default withNavigation(MenuAdvanced);
