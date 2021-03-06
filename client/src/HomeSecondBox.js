import React from "react";
import { withRouter } from "react-router-dom";

class HomeSecondBox extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(evt) {
        evt.preventDefault();
        this.props.history.push({
            pathname: "/why-i-am-ready",
        });
    }

    render() {
        return (
            <div id="home-second-box" onClick={this.handleClick} title="Click to read the rest of why I am ready for your opportunity...">
                <h2 className="home-second-box-heading">Why I Am Ready to Work for You</h2>
                <p className="home-second-box-txt"> 
                Growing up as the youngest child in a Korean-Australian family of my two hard-working parents and three older sisters comes with its unusual perks and challenges. 
                Compared to others my age, I quickly had a very bleak, yet honest insight into the dilemmas of adult life. 
                My second oldest sister, Danielle, would come home tired from her work as a software engineer, and sit at the kitchen counter to eat a lonely dinner. 
                Being a curious, ambitious person who wanted to prepare for my future, I would eagerly ask her questions, both philosophical and practical, about her job. 
                Every breath that she would periodically take after swallowing food, she would tell me about events that happened at her workplace and the toxic environment that made her feel small as a Korean woman.......(click to read more)
                </p>
            </div>
        );
    }
}

export default withRouter(HomeSecondBox);