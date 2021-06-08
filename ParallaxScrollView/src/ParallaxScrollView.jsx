import { Component, createElement } from "react";
import { Parallax } from "./components/Parallax";

export class ParallaxScrollView extends Component {
    render() {
        return <Parallax {...this.props} />;
    }
}
