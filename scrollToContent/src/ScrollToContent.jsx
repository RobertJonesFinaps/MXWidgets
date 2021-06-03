import { Component, createElement } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

/**
 * Component that allows for automatic scrolling
 *
 * Features
 * - Trigger attribute causes scroll to matching section label. Trigger is then reset.
 * - Manual scrolling is optional
 * - Padding each section can be handled in widget
 * - Variable number of sections possible
 *
 */

export class ScrollToContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewHeight: 0,
            contentHeightDict: {},
            scrollDistanceArray: []
        };
    }

    scrollToContent = scrollDistance => {
        this.scroller.scrollTo({ x: 0, y: scrollDistance });
    };

    onScrollHandler = event => {
        // called each time the user scrolls and there's an available attribute to set
        let currentPosition = event.nativeEvent.contentOffset.y;
        let distanceArray = this.state.scrollDistanceArray;
        let currentIndex = distanceArray.findIndex(distance => distance >= currentPosition + 1) - 1;

        if (currentIndex != -1 && currentIndex < this.props.listContent.length) {
            // now check whether it's actually necessary to set the attribute
            let currentSectionLabel = this.props.listContent[currentIndex].sectionLabel.value;
            if (currentSectionLabel != this.props.activeItem.value) {
                this.props.activeItem.setValue(currentSectionLabel);
            }
        }
    };

    getScrollDistance = index => {
        // measure the height of all preceding entries
        var scrollDistance = 0;
        for (let i = 0; i < index; i++) {
            scrollDistance += Math.max(
                this.state.contentHeightDict[i],
                this.props.listContent[i].padItem ? this.state.viewHeight : 0
            );
        }
        return scrollDistance;
    };

    componentDidUpdate() {
        if (this.props.activeItemTrigger.value != "") {
            // if trigger contains something search for value scroll to it and then reset the trigger
            let indexToScrollTo = this.props.listContent.findIndex(
                item => item.sectionLabel.value == this.props.activeItemTrigger.value
            );

            if (indexToScrollTo !== -1) {
                // something has been found
                this.scrollToContent(this.getScrollDistance(indexToScrollTo));
                this.props.activeItemTrigger.setValue(""); // reset the trigger attribute
            }
        }
    }

    onLayoutContentHandler = (event, index) => {
        // Sets up dict of heights for each item
        var joined = this.state.contentHeightDict;

        joined[index] = event.nativeEvent.layout.height;
        this.setState({
            contentHeightDict: joined
        });
    };

    onLayoutViewHandler = event => {
        // Gets the size of the viewport of the scrollview
        // creates the distance array
        this.setState({ viewHeight: event.nativeEvent.layout.height });

        var joined = this.state.contentHeightDict;

        if (Object.keys(joined).length === this.props.listContent.length) {
            // Check if the dict tracking heights is full and there's an available attribute for the current position
            // if so create the distance array
            var distanceArray = [0];
            for (let i = 0; i < this.props.listContent.length; i++) {
                distanceArray.push(
                    distanceArray[i] +
                        (this.props.listContent[i].padItem
                            ? Math.max(joined[i], Math.max(event.nativeEvent.layout.height))
                            : joined[i])
                );
            }
            this.setState({
                scrollDistanceArray: distanceArray
            });
        }
    };

    render() {
        let renderContent = this.props.listContent.map((item, index) => {
            // render each item in the list
            return (
                <View key={3 * index}>
                    <View
                        key={3 * index + 1}
                        onLayout={event => {
                            this.onLayoutContentHandler(event, index);
                        }}
                    >
                        {item.content}
                    </View>
                    {item.padItem && index in this.state.contentHeightDict ? (
                        <View
                            key={3 * index + 2}
                            style={{
                                height: Math.max(this.state.viewHeight - this.state.contentHeightDict[index], 0)
                            }}
                        />
                    ) : null}
                </View>
            );
        });

        return (
            <ScrollView
                style={[styles.container, this.props.style[0].container]}
                ref={scroller => {
                    this.scroller = scroller;
                }}
                onScroll={
                    this.props.activeItem
                        ? scrollEvent => {
                              this.onScrollHandler(scrollEvent);
                          }
                        : null
                }
                scrollEventThrottle={16}
                onLayout={event => {
                    this.onLayoutViewHandler(event);
                }}
                scrollEnabled={this.props.allowScroll}
                showsVerticalScrollIndicator={this.props.showScrollBar}
            >
                {renderContent}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
