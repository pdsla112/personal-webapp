import React from "react";
import boxImage from "./images/boxes.jpg";
import computerImage from "./images/computer.jpg";
import yosemiteImage from "./images/yosemite.jpeg";
import cioppinoImage from "./images/cioppino.jpeg";

class HomeFourthBox extends React.Component {
    render() {
        return (
            <div id="home-fourth-box">
                <h2 className="home-fourth-box-heading">My Other Hobbies</h2>
                <div className="home-fourth-box-content-box">
                    <div className="home-fourth-box-txt-box-left">
                        <h3 className="home-fourth-box-subheading">Building Gaming Computers</h3>
                        <p className="home-fourth-box-txt">
                            I love building gaming computers!
                            The idea of thinking through the compatibility of different components
                            of my PC, and imagining its final form, is exciting and nerdy.
                            Also, you can play the latest games on it without worrying too much
                            about storage/graphic issues.
                        </p>
                    </div>
                    <img src={boxImage} alt="boxes of computer parts" className="home-fourth-box-img"/>
                </div>

                <div className="home-fourth-box-content-box">
                    <img src={computerImage} className="home-fourth-box-img-left" alt="finished PC"/>
                    <div className="home-fourth-box-txt-box-right">
                        <p className="home-fourth-box-txt">
                            Every time I build a PC, I worry that the components might not be compatible,
                            or the cables might not fit. There is also the worry of some of the parts being defects,
                            which is why I have so many cardboard boxes in my room, just in case. 
                            But to this day, this PC that I built works very well, and taught me many lessons
                            about electronics and hardware.
                        </p>
                    </div>
                </div>
                
                <div className="home-fourth-box-content-box">
                    <div className="home-fourth-box-txt-box-left">
                        <h3 className="home-fourth-box-subheading">Learning About Human History</h3>
                        <p className="home-fourth-box-txt">
                            I love watching documentaries and reading books about how
                            archaeology is being used to uncover secrets about the ancient
                            past. Learning more about older civilisations allows me to
                            time travel to that place, and immerse myself into their
                            culture and vibe. This is probably why I enjoy playing massive open world
                            games that are set in the past, like <em>Kingdom Come Deliverance</em>,
                            <em>Assassin's Creed Origins</em> and <em>Assassin's Creed Odyssey</em>.
                        </p>
                    </div>
                    <img src={yosemiteImage} alt="Ahwahnee Peoples Traditional Homes" className="home-fourth-box-img"/>
                </div>
                
                <div className="home-fourth-box-content-box">
                    <img src={cioppinoImage} className="home-fourth-box-img-left" alt="cioppino"/>
                    <div className="home-fourth-box-txt-box-right">
                        <h3 className="home-fourth-box-subheading">Eating and Learning About Food</h3>
                        <p className="home-fourth-box-txt">
                            I know that this might sound kind of obvious. I mean who doesn't like food?
                            But, I <em>REALLY</em> like food. At the end of a hard day, there is almost 
                            nothing quite like eating good food, and feeling its satisfying flavours and textures.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeFourthBox;