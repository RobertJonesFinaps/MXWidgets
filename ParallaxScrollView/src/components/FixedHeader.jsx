import { Component, createElement } from "react";
import { SafeAreaView } from "react-native";

export class FixedHeader extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <SafeAreaView
                style={[
                    { position: "absolute", top: this.props.statusBarHeight - 10, width: this.props.width },
                    this.props.style[0].fixedHeader
                ]}
            >
                {this.props.fixedHeader}
            </SafeAreaView>
        );
    }
}
