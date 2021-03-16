import React from "react";
import githubLogo from "./images/github-logo.png";
import { NavLink } from "react-router-dom";

class HomeThirdBox extends React.Component {
    render() {
        return (
            <div id="home-third-box">
                <h2 className="home-third-box-heading">My Projects</h2>
                <h3 className="home-third-box-subheading">Web Applications That I Developed</h3>
                <div className="home-third-box-content-box">
                    <h4 className="home-third-box-content-box-subheading">This One!</h4>
                    <div className="github-box last-element">
                        <a href="https://github.com/pdsla112/personal-webapp" className="github-txt" target="_blank" rel="noopener noreferrer"><p>Github Respository for this Web Application</p></a>
                        <a href="https://github.com/pdsla112/personal-webapp" target="_blank" rel="noopener noreferrer"><img src={githubLogo} alt="Github Logo" className="home-third-box-github-logo"/></a>
                    </div>
                </div>

                <div className="home-third-box-content-box">
                    <h4 className="home-third-box-content-box-subheading">REACH Magazine App</h4>
                    <div className="github-box">
                        <a href="https://github.com/pdsla112/reach-magazine-mern-app" className="github-txt" target="_blank" rel="noopener noreferrer"><p>Github Respository for this Web Application</p></a>
                        <a href="https://github.com/pdsla112/reach-magazine-mern-app" target="_blank" rel="noopener noreferrer"><img src={githubLogo} alt="Github Logo" className="home-third-box-github-logo"/></a>
                    </div>
                    <a href="https://polar-cove-87626.herokuapp.com/" className="extra-content" target="_blank" rel="noopener noreferrer"><p>Click here to visit the website...</p></a>
                    <NavLink to="/story-behind-app" className="extra-content last-element">View My Story Behind This App</NavLink>
                </div>

                <h3 className="home-third-box-subheading second-subheading">Other</h3>
                <div className="home-third-box-content-box">
                    <div className="github-box third-box-last-element">
                        <a href="https://github.com/pdsla112/algorithms-for-fun" className="github-txt" target="_blank" rel="noopener noreferrer"><p>A Java Github Repository That I Have for Learning Algorithms and Data Types</p></a>
                        <a href="https://github.com/pdsla112/algorithms-for-fun" target="_blank" rel="noopener noreferrer"><img src={githubLogo} alt="Github Logo" className="home-third-box-github-logo"/></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeThirdBox;