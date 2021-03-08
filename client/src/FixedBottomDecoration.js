import React from "react";
import waves from "./images/edited-sea.png";
import tree from "./images/pine-2.png";

class FixedBottomDecoration extends React.Component {
    render() {
        return (
            <div id="fixed-bottom-decoration-box">
                <img src={waves} className="wave-img"/>
                <img src={tree} className="tree-img"/>
            </div>
        );
    }
}

export default FixedBottomDecoration;