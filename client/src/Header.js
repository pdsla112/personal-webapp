import React from "react";
import githubLogo from "./images/github-logo.png";
import linkedinLogo from "./images/linkedin-logo.png";
import mediumLogo from "./images/medium-logo.png";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <div id="header-box">
                <a href="https://github.com/pdsla112" target="_blank" rel="noopener noreferrer"><img src={githubLogo} className="header-box-github-logo"/></a>
                <a href="https://linkedin.com/in/phillip-la-7a9125176" target="_blank" rel="noopener noreferrer"><img src={linkedinLogo} className="header-box-linkedin-logo"/></a>
                <NavLink to="/" className="header-box-home-navlink navlink">Home</NavLink>
                <h1 className="header-box-title">PHILLIP LA</h1>
                <NavLink to="/why-i-am-ready" className="header-box-navlink-1 navlink">Why I Am Prepared for Your Opportunity</NavLink>
            </div>
        );
    }
}

export default Header;