import React from "react";
import waves from "./images/sea.png";
import tree from "./images/pine-2.png";

class FixedBottomDecoration extends React.Component {
    render() {
        return (
            <div className="fixed-bottom-decoration-box">
                {/* <img src={waves} className="wave-img"/>
                <img src={tree} className="tree-img"/> */}
                <div className="wave-box">
                    <img src={waves} className="wave-img"/>
                </div>
                <div className="tree-box">
                    <img src={tree} className="tree-img"/>
                </div>
            </div>
        );
    }
}

export default FixedBottomDecoration;