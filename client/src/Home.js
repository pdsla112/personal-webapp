import React from "react";
import HomeTopBox from "./HomeTopBox";
import Header from "./Header";
import FixedBottomDecoration from "./FixedBottomDecoration";
import HomeSecondBox from "./HomeSecondBox";
import HomeThirdBox from "./HomeThirdBox";
import HomeFourthBox from "./HomeFourthBox";

class Home extends React.Component {
    render() {
        return (
            <div>
                <Header/> 
                <HomeTopBox/> {/* Basic introduction section */}
                <HomeSecondBox/> {/* "Why I am ready to work for you" box */}
                <HomeThirdBox/> {/* "My Projects" section */}
                <HomeFourthBox/> {/* "My Hobbies" section */}
                <FixedBottomDecoration/>
            </div>
        );
    }
}

export default Home;