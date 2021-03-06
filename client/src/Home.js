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
                <HomeTopBox/>
                <HomeSecondBox/>
                <HomeThirdBox/>
                <HomeFourthBox/>
                <FixedBottomDecoration/>
            </div>
        );
    }
}

export default Home;