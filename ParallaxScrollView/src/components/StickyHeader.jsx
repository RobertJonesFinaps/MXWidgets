import { Component, createElement } from "react";
import { SafeAreaView, View } from "react-native";

export class StickyHeader extends Component {
    render() {
        HeightStickyHeader = this.props.HeightStickyHeader;
        width = this.props.width;
        usableHeight = this.props.usableHeight;
        zoomFactor = this.props.zoomFactor;
        percentScrolled = this.props.percentScrolled;
        initialHeightPercentage = this.props.initialHeightPercentage;
        stickyPercentage = this.props.stickyPercentage;
        showHeader = this.props.percentScrolled <= initialHeightPercentage - stickyPercentage ? 0 : 1;

        style = {
            stickyHeader: {
                height: HeightStickyHeader,
                justifyContent: "center",
                overflow: "hidden"
            }
        };

        return (
            <SafeAreaView key="sticky-header" style={[style.stickyHeader, this.props.style[0].stickyHeader]}>
                <View
                //shouldRasterizeIOS={true}
                // renderToHardwareTextureAndroid={true}
                    style={{
                        position: "absolute",
                        top: -(usableHeight - HeightStickyHeader) / 2,
                        left: ((1 - zoomFactor) * width) / 2,
                        bottom: HeightStickyHeader,
                        width: width * zoomFactor,
                        height: usableHeight,
                        opacity: showHeader
                        
                    }}
                >
                    {this.props.backgroundImage}
                </View>
                <View
                    style={{
                        opacity: Math.max(
                            0,
                            Math.min((2 * percentScrolled) / (initialHeightPercentage - stickyPercentage) - 1, 1)
                        )
                    }}
                >
                    {this.props.stickyHeader}
                </View>
            </SafeAreaView>
        );
    }
}
