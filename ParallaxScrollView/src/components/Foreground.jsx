import { Component, createElement } from "react";
import { View } from "react-native";

export class Foreground extends Component {
    render() {
        return (
            <View style={[{ flex: 1, alignItems: "center", justifyContent: "center" }, this.props.style[0].foreground]}>{this.props.headerLarge}</View>
        );
    }
}
