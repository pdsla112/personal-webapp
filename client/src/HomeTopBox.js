import React from "react";
import HomeCarousel from "./HomeCarousel";

class HomeTopBox extends React.Component {
    render() {
        return (
            <div id="home-top-box">
                <HomeCarousel className="something"/>
                <div className="home-top-box-right-box">
                    <h2 className="home-top-box-heading">MERN Fullstack Developer | Software Engineering Student</h2>
                    <p className="home-top-box-txt">
                        Welcome to my personal website!
                        I developed this web application specifically for you to get to know me more hollistically.
                        I really believe that people are not numbers and there are always stories behind the struggles that they have overcome.
                        You can view my personal projects, as well as the reason why I believe that I am ready to reap the benefits of your opportunity to its fullest potential.
                        I hope my personality successfully radiates out of this page onto you!
                        Make sure to also check out my personal Github repository and my LinkedIn page. 
                        Feel free to reach out to me through email or LinkedIn. 
                        Enjoy!
                    </p>
                </div>
            </div>
        );
    }
}

export default HomeTopBox;