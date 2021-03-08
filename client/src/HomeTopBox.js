import React from "react";
import HomeCarousel from "./HomeCarousel";

class HomeTopBox extends React.Component {
    render() {
        return (
            <div id="home-top-box">
                <HomeCarousel/>
                <p className="home-top-box-txt">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras scelerisque ligula nec libero lobortis, eu ultrices est finibus.
                    Pellentesque aliquet mi id urna condimentum tempus. Maecenas vestibulum eu tellus ac dictum.
                    Aliquam auctor, velit in ullamcorper maximus, sem elit rutrum ipsum, sed tincidunt ante ante ut nibh.
                    Donec placerat lectus at rutrum aliquam. Donec accumsan condimentum viverra. Suspendisse potenti.
                    Aliquam erat volutpat. Nullam rhoncus nisi faucibus risus tincidunt, vitae imperdiet enim auctor.
                    Cras ultricies pharetra mollis. Donec vitae bibendum lectus, in luctus sapien.
                    Fusce porttitor tincidunt ante, ut accumsan arcu suscipit et.
                    In tincidunt ante nunc, at hendrerit felis hendrerit et.
                    Duis elementum sollicitudin velit, eu rhoncus elit consectetur vel.
                    Nunc molestie in sapien eu lobortis.
                </p>
            </div>
        );
    }
}

export default HomeTopBox;