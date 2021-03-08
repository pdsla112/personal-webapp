import React from "react";

class HomeThirdBox extends React.Component {
    render() {
        return (
            <div id="home-third-box">
                <h2 className="home-third-box-heading">My Projects</h2>
                <h3 className="home-third-box-subheading">Web Applications That I Developed</h3>
                <ul>
                    <li>This One!</li>
                        <ul>
                            <li>Github Repository for this Web Application</li>
                        </ul>
                    <li>Reach Magazine App</li>
                        <ul>
                            <li>Click here to visit the website...</li>
                            <li>Github Respotiory for this Web Application</li>
                            <li>View My Story Behind This App</li>
                        </ul>
                </ul>
                <h3 className="home-third-box-heading">A Java Github Repository That I Have for Learning Algorithms and Data Types</h3>
                <img className="home-third-box-logo"></img>
            </div>
        );
    }
}

export default HomeThirdBox;