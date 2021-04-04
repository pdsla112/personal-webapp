import React from "react";
import Header from "./Header";
import FixedBottomDecoration from "./FixedBottomDecoration";
import individualImg from "./images/individual-article.png";
import loginImg from "./images/login.png";
import signupImg from "./images/signup.png";
import deleteNewArticleImg from "./images/delete-new-article.png";

class Story extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div id="reach-box">
                <Header/>
                <div className="reach-box-txt-box">
                    <h1 className="reach-box-heading">REACH Magazine App</h1>
                    <p className="reach-box-txt">
                        Other than some practice apps that I've done, this was my very first "proper" web application that I created using MERN (MongoDB, Express, React, Node.js) technologies as the basis.
                        A group of friends and I were initially planning on creating a student-run magazine at university.
                        I took this opportunity to challenge myself to see if I can create an actual magazine app that doesn't use typical content management systems like Wix or WordPress.
                        I took inspiration from Scoop, the official content management system company for the Time magazine, in order to create my very own content management system for this magazine app.
                        This app not only uses MERN technologies, but also uses other developers' npm libraries to achieve its various functionalities.
                        This app has the front end using axios and Facebook's React, and backend server of Express, and cloud database of MongoDB.
                        The app is somewhat "done", but it is NOT complete. There are still some things to debug, and more functionalities that I want to add in the future. 
                        Also, as I learn to implement more data structures and algorithms, I will perfect the speed of data reading and writing. 
                        You can view the data structures and algorithms that I have implemented so far in one of my repositories on Github.
                        If you would like to access exclusive "admin" features such as the CMS function of deleting articles, then:
                    </p>
                    <p className="reach-box-directions">
                        navigate to the sidebar => click Login => type in "genesis" for username, and "genesis" for password, and click the sign-in button => navigate to the bottom of the sidebar, and see that you have a new section under the heading "CMS". => click logout in the sidebar once you are done :) 
                    </p>
                    <div className="reach-box-images-box-1">
                        <img src={deleteNewArticleImg} alt="CMS delete page" className="reach-box-img-duplex-left"/>
                        <img src={individualImg} alt="Individual article page" className="reach-box-img-duplex-right"/>
                    </div>
                    <p className="reach-box-warning">
                        WARNING: I am using a free heroku server for my web applications, so they may all take some time initially to open up. 
                        Also, some features may not work or may not be available, for the time being. For example, you cannot click on the articles in the "Top Stories" section of the homepage. 
                        Other than that, most of the important functionalities should work. Thank you for your patience and understanding :)
                    </p>
                    <div className="reach-box-images-box-2">
                        <img src={loginImg} alt="Login page" className="reach-box-img-duplex-left"/>
                        <img src={signupImg} alt="Signup page" className="reach-box-img-duplex-right"/>
                    </div>
                </div>
                <FixedBottomDecoration/>
            </div>
        );
    }
}

export default Story;