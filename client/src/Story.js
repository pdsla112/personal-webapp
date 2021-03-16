import React from "react";
import FixedBottomDecoration from "./FixedBottomDecoration.js";
import Header from "./Header.js";

class Story extends React.Component {
    render() {
        return (
            <div className="story-box">
                <Header/>
                <FixedBottomDecoration/>
            </div>
        );
    }
}

export default Story;