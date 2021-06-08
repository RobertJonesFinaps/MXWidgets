import { Component, createElement } from 'react';
import { ScrollView } from 'react-native';

class HorizontalScroll extends Component {
  render() {
    return createElement(ScrollView //make it a horizontal scrollview, and make a boolean for displaying or not displaying the scrollbar.
    , {
      horizontal: true,
      showsHorizontalScrollIndicator: this.props.showScrollBar
    }, this.props.content);
  }

}

export { HorizontalScroll };
