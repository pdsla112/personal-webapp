import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import homeCarousel1 from "./assets/home-carousel-1.jpeg";
import homeCarousel2 from "./assets/home-caoursel-2.jpeg";
import homeCarousel3 from "./assets/home-carousel-3.jpeg";

class HomeCarousel extends React.Component {
    render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 4000,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            className: "login-carousel",
            autoplay: true,
            autoPlaySpeed: 4000,
            fade: true
        };
        return (
            <Slider {...settings}>
                <div>
                    {homeCarousel1}
                </div>
                <div>
                    {homeCarousel2}
                </div>
                <div>
                    {homeCarousel3}
                </div>
            </Slider>
        );
    }
}

export default HomeCarousel;