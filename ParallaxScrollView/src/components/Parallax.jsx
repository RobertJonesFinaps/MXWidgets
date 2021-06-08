/* eslint-disable sort-imports */
import { Component, createElement } from "react";
import { Dimensions, StatusBar, Platform, View } from "react-native";
import ParallaxScrollView from "react-native-parallax-scroll-view";
import DeviceInfo from "react-native-device-info";
import { Foreground } from "./Foreground";
import { Background } from "./Background";
import { FixedHeader } from "./FixedHeader";
import { StickyHeader } from "./StickyHeader";

const executeAction = action => {
    if (action && action.canExecute && !action.isExecuting) {
        action.execute();
    }
};
export class Parallax extends Component {
    constructor(props) {
        super(props);
        this.state = {
            percentScrolled: 0,
            scrollViewHeight: 1000000
        };
    }

    handleScroll = (e, usableHeight, scrollViewHeight) => {
        var scrollPosition = e.nativeEvent.contentOffset.y;
        // Setting the state here to be used for the parallax effect
        this.setState({ percentScrolled: scrollPosition / usableHeight });
    };

    // ********************************//

    render() {
        const hasNotch = DeviceInfo.hasNotch();
        // console.log(`CUSTOMDEBUG: has notch: ${DeviceInfo.hasNotch()}`);

        // Status bar fix android & notch height added (will be added to sticky header height)
        let statusBarHeight;
        if (Platform.OS === "ios" && hasNotch) {
            statusBarHeight = 40;
        } else if (Platform.OS === "ios" && hasNotch === false) {
            statusBarHeight = 20;
        } else {
            statusBarHeight = StatusBar.currentHeight + 20;
        }

        const window = Dimensions.get("window");
        const width = window.width + 2; // for consistent border radius

        const usableHeight = window.height + statusBarHeight;

        const initialHeightPercentage = parseInt(this.props.parallaxHeight, 10) / 100;

        const initialHeight = initialHeightPercentage * usableHeight;

        const stickyPercentage =
            this.props.stickyHeightUnit === "percentage"
                ? parseInt(this.props.stickyHeight, 10) / 100 + statusBarHeight / usableHeight
                : parseInt(this.props.stickyHeight, 10) / usableHeight + statusBarHeight / usableHeight;

        const HeightStickyHeader =
            this.props.stickyHeightUnit === "percentage"
                ? Math.round(usableHeight * stickyPercentage)
                : parseInt(this.props.stickyHeight, 10) + statusBarHeight;

        const zoomFactor = 1;

        return (
            <ParallaxScrollView
                backgroundScrollSpeed={Number(this.props.scrollSpeed)}
                backgroundColor="transparent"
                parallaxHeaderHeight={initialHeight}
                scrollEventThrottle={1}
                scrollingStickyHeader={false}
                bounces={true}
                onScroll={e => {
                    this.handleScroll(e, usableHeight, this.state.scrollViewHeight);
                }}
                stickyHeaderHeight={HeightStickyHeader}
                renderStickyHeader={() => (
                    <StickyHeader
                        style={this.props.style}
                        backgroundImage={this.props.backgroundImage}
                        HeightStickyHeader={HeightStickyHeader}
                        width={width}
                        usableHeight={usableHeight}
                        zoomFactor={zoomFactor}
                        percentScrolled={this.state.percentScrolled}
                        initialHeightPercentage={initialHeightPercentage}
                        stickyPercentage={stickyPercentage}
                        stickyHeader={this.props.stickyHeader}
                    />
                )}
                renderBackground={() => (
                    <Background
                        style={this.props.style}
                        width={width}
                        percentScrolled={this.state.percentScrolled}
                        stickyPercentage={stickyPercentage}
                        usableHeight={usableHeight}
                        zoomFactor={zoomFactor}
                        backgroundImage={this.props.backgroundImage}
                    />
                )}
                renderForeground={() => <Foreground style={this.props.style} headerLarge={this.props.headerLarge} />}
                renderFixedHeader={() => (
                    <FixedHeader
                        style={this.props.style}
                        fixedHeader={this.props.fixedHeader}
                        statusBarHeight={statusBarHeight}
                        width={width}
                    />
                )}
            >
                <View
                    style={[
                        {
                            minHeight: window.height - HeightStickyHeader + 30
                        },
                        this.props.style[0].content
                    ]}
                >
                    {this.props.content}
                </View>
            </ParallaxScrollView>
        );
    }
}
