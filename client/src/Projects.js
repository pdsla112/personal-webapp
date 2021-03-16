import React from "react";
import FixedBottomDecoration from "./FixedBottomDecoration.js";
import Header from "./Header.js";

class Projects extends React.Component {
    render() {
        return (
            <div className="projects-box">
                <Header/>
                <FixedBottomDecoration/>
            </div>
        );
    }
}

export default Projects;