import React from "react";
import githubLogo from "./images/github-logo.png";
import { NavLink } from "react-router-dom";
import tick from "./images/tick.png";
import secondExample from "./images/second-example.png";
import thirdExample from "./images/third-example.png";

class HomeThirdBox extends React.Component {
    render() {
        return (
            <div id="home-third-box">
                <h2 className="home-third-box-heading">My Projects</h2>
                <div id="home-third-box-project-box">
                    <div id="home-third-box-project-box-first">
                        <h3 className="home-third-box-subheading">WEB APPLICATIONS THAT I DEVELOPED</h3>
                        <div id="home-third-box-project-box-first-box">
                            <div className="home-third-box-project-box-first-box-first">
                                <h4 className="home-third-box-content-box-subheading">This One!</h4>
                                <div className="github-box last-element">
                                    <a href="https://github.com/pdsla112/personal-webapp" className="github-txt" target="_blank" rel="noopener noreferrer"><p>Github Respository for this Web Application</p></a>
                                    <a href="https://github.com/pdsla112/personal-webapp" target="_blank" rel="noopener noreferrer"><img src={githubLogo} alt="Github Logo" className="home-third-box-github-logo"/></a>
                                </div>
                                <div className="first-box-demonstrations-box">
                                    <h3 className="demonstration-box-heading">Skills Demonstrated:</h3>
                                    <div className="demonstration-point">
                                        <p className="demonstration">Using Visual Studio Code IDE</p>
                                        <img src={tick} alt="tick" className="tick"/>
                                    </div>
                                    <div className="demonstration-point">
                                        <p className="demonstration">Downloading npm packages</p>
                                        <img src={tick} alt="tick" className="tick"/>
                                    </div>
                                    <div className="demonstration-point">
                                        <p className="demonstration">Practise good UX design</p>
                                        <img src={tick} alt="tick" className="tick"/>
                                    </div>
                                    <div className="demonstration-point">
                                        <p className="demonstration">Upload web app to heroku cloud server</p>
                                        <img src={tick} alt="tick" className="tick"/>
                                    </div>
                                    <div className="demonstration-point">
                                        <p className="demonstration">Aesthetically pleasing design</p>
                                        <img src={tick} alt="tick" className="tick"/>
                                    </div>
                                </div>
                            </div>

                            <div className="home-third-box-project-box-first-box-second">
                                <h4 className="home-third-box-content-box-subheading">REACH Magazine App</h4>
                                <div className="github-box">
                                    <a href="https://github.com/pdsla112/reach-magazine-mern-app" className="github-txt" target="_blank" rel="noopener noreferrer"><p>Github Respository for this Web Application</p></a>
                                    <a href="https://github.com/pdsla112/reach-magazine-mern-app" target="_blank" rel="noopener noreferrer"><img src={githubLogo} alt="Github Logo" className="home-third-box-github-logo"/></a>
                                </div>
                                <a href="https://polar-cove-87626.herokuapp.com/" className="extra-content" target="_blank" rel="noopener noreferrer"><p>Click here to visit the website...</p></a>
                                <NavLink to="/story-behind-app" className="extra-content last-element">View My Story Behind This App</NavLink>
                                <div className="first-box-demonstrations-box">
                                    <h3 className="demonstration-box-heading">Skills Demonstrated:</h3>
                                    <div className="demonstration-point">
                                        <p className="demonstration">Using Visual Studio Code IDE</p>
                                        <img src={tick} alt="tick" className="tick"/>
                                    </div>
                                    <div className="demonstration-point">
                                        <p className="demonstration">Downloading npm packages</p>
                                        <img src={tick} alt="tick" className="tick"/>
                                    </div>
                                    <div className="demonstration-point">
                                        <p className="demonstration">Practise good UX design</p>
                                        <img src={tick} alt="tick" className="tick"/>
                                    </div>
                                    <div className="demonstration-point">
                                        <p className="demonstration">Upload web app to heroku cloud server</p>
                                        <img src={tick} alt="tick" className="tick"/>
                                    </div>
                                    <div className="demonstration-point">
                                        <p className="demonstration">Aesthetically pleasing design</p>
                                        <img src={tick} alt="tick" className="tick"/>
                                    </div>
                                </div>
                                <img src={secondExample} alt="screenshot of REACH App" className="examples-1"/>
                            </div>
                        </div>
                    </div>

                    <div id="home-third-box-project-box-second">
                        <h3 className="home-third-box-subheading">OTHER</h3>
                        <div className="home-third-box-project-box-second-box-first">
                            <div className="github-box third-box-last-element">
                                <a href="https://github.com/pdsla112/algorithms-for-fun" className="github-txt" target="_blank" rel="noopener noreferrer"><p>A Java Github Repository That I Have for Learning Algorithms and Data Types</p></a>
                                <a href="https://github.com/pdsla112/algorithms-for-fun" target="_blank" rel="noopener noreferrer"><img src={githubLogo} alt="Github Logo" className="home-third-box-github-logo"/></a>
                            </div>
                            <div className="second-box-demonstrations-box">
                                    <h3 className="demonstration-box-heading">Skills Demonstrated:</h3>
                                    <div className="demonstration-point">
                                        <p className="demonstration">Using Visual Studio Code IDE</p>
                                        <img src={tick} alt="tick" className="tick"/>
                                    </div>
                                    <div className="demonstration-point">
                                        <p className="demonstration">Downloading npm packages</p>
                                        <img src={tick} alt="tick" className="tick"/>
                                    </div>
                                    <div className="demonstration-point">
                                        <p className="demonstration">Practise good UX design</p>
                                        <img src={tick} alt="tick" className="tick"/>
                                    </div>
                                    <div className="demonstration-point">
                                        <p className="demonstration">Upload web app to heroku cloud server</p>
                                        <img src={tick} alt="tick" className="tick"/>
                                    </div>
                                    <div className="demonstration-point">
                                        <p className="demonstration">Aesthetically pleasing design</p>
                                        <img src={tick} alt="tick" className="tick"/>
                                    </div>
                                </div>
                            <img src={thirdExample} alt="screenshot of Algorithms-For-Fun on IntelliJ IDE" className="example-2"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeThirdBox;