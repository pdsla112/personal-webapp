import React from "react"
import FixedBottomDecoration from "./FixedBottomDecoration.js";
import Header from "./Header.js";

class Ready extends React.Component {
    render() {
        return (
            <div className="ready-box">
                <Header/>
                <FixedBottomDecoration/>
            </div>
        );
    }
}

export default Ready;