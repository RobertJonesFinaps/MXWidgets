import React, { Component, createElement } from "react";
import { View } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { Dimensions } from "react-native";


/**
 * Component that extends the bottom sheet capabilities of mendx
 *
 * Features
 * - Includes a draggable area to dismiss bottom sheet in intuitive way
 * - Automatic and fixed sizing possible
 * - Background colours configurable
 */

export class CustomBottomSheet extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //The bottom sheet height that is actually used, updated on automatic calculation with "measureBottomSheet"
      bottomSheetHeight: this.props.height,
    }
  }

  //Updates the bottom sheet open/closed state on a changed value
  componentDidUpdate(prevProps) {
    if (prevProps.showBottomSheet.value === false && this.props.showBottomSheet.value && this.RBSheet != null) {
      this.RBSheet.open()
    }
    
    if (!this.props.showBottomSheet.value && this.RBSheet != null) {
      this.RBSheet.close()
    }
  }


  //Renders the sheet offscreen to know the height of the mendix container and then replaces the bottom sheet height with this. 
  measureBottomSheet = ({ nativeEvent }) => {
      this.setState({ bottomSheetHeight: nativeEvent.layout.height});
    }

   
  //Triggers when the bottom sheet closes, the if statement is needed to prevent a loop in which the componentdidupdate will iterate itself
  onCloseEvent() {
    if (this.props.showBottomSheet.value) {
      this.toggleFalse()
    }
  }

  // Sets mendix attribute to false when user closes bottom sheet
  toggleFalse() {
    this.props.showBottomSheet.setValue(false)
  }

  render() {
    return (
      //First renders the component offscreen if the passed height is 0 to get the height of the container from mendix, then displays the actual widget
      this.state.bottomSheetHeight === 0 ?
        <View style={{ position: "absolute", top: 0, left: -10 * Dimensions.get("window").width }} onLayout={this.measureBottomSheet}>{this.props.content}</View>
        :
        <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          closeOnDragDown={this.props.closeOnDragDown}
          onClose={() => this.onCloseEvent()}
          height={this.state.bottomSheetHeight}
          openDuration={this.props.openDuration}
          closeDuration={this.props.closeDuration}
          animationType={this.props.animation}
          customStyles={this.props.style[0]}
        >
          {this.props.content}
        </RBSheet>
    )
  }

}
