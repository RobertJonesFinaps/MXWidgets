/* eslint-disable sort-imports */
import { Component, createElement } from "react";
import { View } from "react-native";
import MenuAdvanced from "./components/MenuAdvanced";

export class CustomMenuAdvanced extends Component {
    render() {
        return (
            <View>
                <MenuAdvanced {...this.props} />
            </View>
        );
    }
}
