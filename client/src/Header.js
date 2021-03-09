import React from "react";
import githubLogo from "./images/github-logo.png";
import linkedinLogo from "./images/linkedin-logo.png";
import mediumLogo from "./images/medium-logo.png";

class Header extends React.Component {
    render() {
        return (
            <div id="header-box">
                <a href="https://github.com/"><img src={githubLogo} className="header-box-github-logo"/></a>
                <a href="https://au.linkedin.com/"><img src={linkedinLogo} className="header-box-linkedin-logo"/></a>
                <a href="https://medium.com/"><img src={mediumLogo} className="header-box-medium-logo"/></a>
                <h1 className="header-box-title">PHILLIP LA</h1>
                <p className="header-box-navlink-1">Why I Am Prepared for Your Opportunity</p>
                <p className="header-box-navlink-2">Personal Projects</p>
            </div>
        );
    }
}

export default Header;