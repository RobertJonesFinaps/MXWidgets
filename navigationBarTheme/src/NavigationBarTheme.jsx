import { Component, createElement } from "react";
import { StatusBar } from "react-native";

export class NavigationBarTheme extends Component {
    barStyleHandler = () => {
        let barStyle = this.props.statusBarStyle;
        switch (barStyle) {
            case "dark":
                return "dark-content";
            case "light":
                return "light-content";
            default:
                return "default";
        }
    };

    componentDidMount () {
        StatusBar.setHidden(this.props.hideStatusBar);
    }

    render() {
        return <StatusBar barStyle={this.barStyleHandler()} />;
    }
}
