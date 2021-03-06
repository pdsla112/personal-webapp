import React from "react";
import HomeTopBox from "./HomeTopBox";
import Header from "./Header";
import FixedBottomDecoration from "./FixedBottomDecoration";

class Home extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <HomeTopBox/>
                <FixedBottomDecoration/>
            </div>
        );
    }
}

export default Home;