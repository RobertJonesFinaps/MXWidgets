import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { Component, createElement } from "react";


export class HorizontalScroll extends Component {
    render() {
        return (
            <ScrollView
            //make it a horizontal scrollview, and make a boolean for displaying or not displaying the scrollbar.
                horizontal={true}
                showsHorizontalScrollIndicator = {this.props.showScrollBar}>
                {this.props.content}
            </ScrollView>
        );
    };
}
