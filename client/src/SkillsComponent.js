import React from "react";

class SkillsComponent extends React.Component {
    render() {
        return (
            <div id="skills-box">
                <h2 className="skills-box-heading">Technologies/Skills I Have Experience With</h2>
                <div className="columns">
                    <div className="column-1">
                        <div className="column-list">
                            <p>Java</p>
                            <p>Matplotlib</p>
                            <p>Seaborn</p>
                            <p>Pandas</p>
                            <p>NumPy</p>
                            <p>Assembly</p>
                        </div>
                    </div>
                    <div className="column-2">
                        <div className="column-list">
                            <p>React</p>
                            <p>Express</p>
                            <p>Node.js</p>
                            <p>Mongoose</p>
                            <p>MongoDB Atlas</p>
                            <p>Building a gaming computer</p>
                        </div>
                    </div>
                    <div className="column-3">
                        <div className="column-list">
                            <p>SQL</p>
                            <p>Importing npm libraries</p>
                            <p>Multer</p>
                            <p>Bcrypt</p>
                            <p>Connect-mongodb-session</p>
                            <p>Haskell</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SkillsComponent;