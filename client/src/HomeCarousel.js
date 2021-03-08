import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import homeCarousel1 from "./images/home-carousel-1.jpeg";
import homeCarousel2 from "./images/home-carousel-2.jpeg";
import homeCarousel3 from "./images/home-carousel-3.jpeg";

class HomeCarousel extends React.Component {
    render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 4000,
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: false,
            className: "home-carousel",
            autoplay: true,
            autoPlaySpeed: 4000,
            fade: true
        };
        return (
            <Slider {...settings}>
                <div>
                    <img src={homeCarousel1} className="home-carousel-slides"/>
                </div>
                <div>
                    <img src={homeCarousel2} className="home-carousel-slides"/>
                </div>
                <div>
                    <img src={homeCarousel3} className="home-carousel-slides"/>
                </div>
            </Slider>
        );
    }
}

export default HomeCarousel;