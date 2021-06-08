import { Component, createElement } from "react";
import { View } from "react-native";

export class Background extends Component {
    // Background moves up and is zoomed after a certain point is reached
    // The background image gets moved up as the user scrolls. This is captured by this.props.percentScrolled
    //
    // The main calculations here are simply to stretch the image to create a "zoom" effect.
    // We move the leftmost edge of the image further off screen, while simultaneously widening the width of the view
    // The extent of this zoom effect is determined by the "zoom factor" (k)
    //
    // Essentially we take the width of the device and multiply it by either 1 or z (as long as 1 <= z <= k is true)
    //
    // The formula for calculating z ( given in the form y = a x + b ) and is as follows:
    //
    // z(h) = [( 1 - k ) / ( c - (1 - x) )] * h + [ ( c * k - (1-x) ) / ( c - (1-x))]
    //
    // Where the definitions are as follows:
    // h: percentage scrolled
    // x: sticky header percentage height
    // k: zoom factor
    // c: correction factor (zoom start)
    //
    // similarly the formula for calculating the pull to the left is
    //
    //  l(h) = 1/2 * [[ ( 1 - k ) / ( c - (1 - x)) ] * h - [ ( c * (1 - k) )/ (c - (1-x))]]
    //
    // Note that the h coefficient of both l and z are identical
    // while the constants are related as b_l = b_z - 1
    //
    //
    // A previous implementation of this function used a quadratic solver which handled both width and position at once:
    // OLD FORMULA: Math.round(this.props.percentScrolled - (1 - stickyPercentage - (zoomFactor - 1) - ( 2 - zoomFactor ))) * (1 + this.props.percentScrolled - (1 - stickyPercentage - (zoomFactor - 1))
    //
    // This can be reimplemented if necessary; replacing the a * this.props.percentScrolled + b

    render() {
        const stickyPercentage = this.props.stickyPercentage;
        const zoomFactor = this.props.zoomFactor;
        const startPosition = stickyPercentage / 2;

        let a = (1 - zoomFactor) / (startPosition - (1 - stickyPercentage));
        let b = (startPosition * zoomFactor - (1 - stickyPercentage)) / (startPosition - (1 - stickyPercentage));

        return (
            <View
                style={[
                    {
                        width: this.props.width * Math.max(1, a * this.props.percentScrolled + b),
                        height: this.props.usableHeight,
                        left: -this.props.width * Math.max(0, (a * this.props.percentScrolled + b - 1) / 2),
                        backgroundColor: "transparent"
                    },
                    this.props.style[0].background
                ]}
            >
                {this.props.backgroundImage}
            </View>
        );
    }
}
