import React from "react"
import FixedBottomDecoration from "./FixedBottomDecoration.js";
import Header from "./Header.js";
import commencementImg from "./images/university-commencement.jpg";
import engnImg from "./images/engn1211.jpg";
import goldenGateSoloImg from "./images/golden-gate-bridge-solo.jpg";
import missionBurritoImg from "./images/mission-burrito.jpg";
import sanFranDesignImg from "./images/san-francisco-city-design.jpeg";
import googleDinoImg from "./images/google-dinosaur.jpg";
import googleHQImg from "./images/google-hq.jpg";
import googleSoloImg from "./images/second-google-solo.jpg";
import pinkSunriseImg from "./images/pink-sunrise.jpg";

class Ready extends React.Component {
    render() {
        return (
            <div className="ready-box">
                <Header/>
                <div id="ready-box-wrapper">
                    <h2 className="ready-box-title">Why I Am Ready to Work for You</h2>
                    <div id="ready-box-txt">
                        <p>
                        Growing up as the youngest child in a Korean-Australian family of my two hard-working parents and three older sisters comes with its unusual perks and challenges.
                        Compared to others my age, I quickly had a very bleak, yet honest insight into the dilemmas of adult life.
                        My second oldest sister, Danielle, would come home tired from her work as a software engineer, and sit at the kitchen counter to eat a lonely dinner.
                        Being a curious, ambitious person who wanted to prepare for my future, I would eagerly ask her questions, both philosophical and practical, about her job.
                        Every breath that she would periodically take after swallowing food, she would tell me about events that happened at her workplace and the toxic environment that made her feel small as a Korean woman.
                        Like the time when her male coworkers would hold business meetings at a gentleman’s club.
                        Or the time when European-Australian male executives would publicly patronise an Indian-Canadian coworker for his ideas at meetings.
                        Growing up in Australia, even if I was subject to many racially-motivated attacks both direct and passive, I was brainwashed by the easy-going, true-blue Aussie culture to believe that this country truly embraced multiculturalism. 
                        But her experiences were a catalyst for me to truly face the bleakness of my future as a Korean-Australian software engineer.
                        </p>

                        <br></br>

                        <p>
                        My parents lost so much by moving to Australia, and so did my older sisters.
                        My family went through a lot, and never could we have imagined the struggles that we overcome.
                        Growing up seeing the damage that my parents and older sisters endured embedded a certain philosophy in me that governed my earlier years. 
                        That philosophy was to prepare as much as I could for the future, even if I had no idea what it was going to be like. 
                        </p>

                        <br></br>

                        <p>
                        After having not-so-fulfilling teenage years in my home of Sydney, I moved to Canberra by myself to study software engineering at the Australian National University, in search of maturity and direction in life.
                        It was a wild journey, and to be honest, I struggled a lot.
                        From the small things, like the scarcity of nice, drinkable water, to the more emotional problems of being by myself in times of piling deadlines. 
                        I grew up a lot in such a short amount of time. 
                        But, compared to the mountains of challenges ahead of me, I felt small, and my sister’s stories manifested into reality more and more each day. 
                        Studying next to so many smart people who were programmers from a young age, when I was just starting out, made me feel both privileged and self-conscious. 
                        I doubted if I deserved to be around such amazing people, who I admired and desired to become more like. 
                        It was the second semester of 2019 which was my last straw.
                        That semester, the little confidence and determination to push myself further was violently shredded away from me. 
                        With humiliation and disappointment, I finally accepted my defeat.
                        </p>
                        <img src={commencementImg} alt="ANU commencement" className="ready-img-left-duplex"/>
                        <img src={engnImg} alt="ENGN1211 image" className="ready-img-right-duplex"/>

                        <br></br>

                        <p>
                        Unlike others who were satisfied with how their semester went, I went back to my home in Sydney, and purposely put myself into a tiny study room. 
                        I’ve always wanted to do software engineering personal projects, and this time, I first began learning about the world of web development. 
                        I was curious and the projects that school assigned me did not teach me much about the world of computer science outside of contents that were assessable. 
                        I wanted to learn a new skill, kind of like my first step to becoming a real software engineer. 
                        But also, I wanted to prove to myself that I deserved to do software engineering. 
                        That is, I wanted to know that I wasn’t exactly a lost cause, and the current struggles were just a bump in road to build me into a stronger person. 
                        </p>

                        <br></br>

                        <p>
                        Life is truly weird in that it pushes you into things when you least expect it. 
                        My mother who saw me studying in the tiny room day in and day out, suggested out of the blue, “I bet kids your age are having fun travelling right now. You should go to America during this summer holidays.” 
                        I was truly gobsmacked. 
                        I’ve always wanted to go to America, but going there after a struggling semester? 
                        Not exactly the situation that I imagined I would be in before going there. 
                        Still, I had nothing to lose and anything was better than the nothing I had. 
                        What I was desperately searching for were answers, so in determination to make this trip educational and productive, I planned out my itinerary to a tee. 
                        </p>

                        <br></br>

                        <p>
                        Remembering back to the time I attended a live seminar at one of the new lecture halls at ANU by a Google team travelling across Australian universities, I planned out a 16 day trip to San Francisco, silicon valley, Yosemite and Los Angeles. 
                        I once read a book called “Breaking the Bamboo Ceiling”, and one of the advices it gave was to never join an organisation that doesn’t at least mention diversity in their seminars. 
                        The Google seminar that I attended made half of their seminar about the strength that diversity brings. 
                        This impressed me so much that I was determined to learn more about Google and the the Bay Area. 
                        I wanted to know more intimately about Google, but also, I wanted to experience life as a software engineer at Google in the Bay Area.
                        </p>

                        <br></br>

                        <p>
                        My solo trip started on the 1st of February, miraculously right before the pandemic got really serious in the US. 
                        I travelled like a local and ate like a local. 
                        If the distance wasn’t too long, I even walked to my destinations, just so I could feel the breeze, feel the stones and concrete under my shoes and really take in the new environment around me. 
                        </p>
                        <img src={goldenGateSoloImg} alt="Me at the Golden Gate Bridge" className="ready-img-left-duplex"/>
                        <img src={missionBurritoImg} alt="Mission burrito" className="ready-img-right-duplex"/>

                        <br></br>

                        <p>
                        I even toured Google headquarters in Mountain View. 
                        I couldn’t go into the most private areas of the campus, but with my personal tour guide, I was able to learn about the history of the Bay Area, and the various opportunities that are presented to software engineers who want to make a positive impact in the world.
                        </p>
                        {/* <img src={sanFranDesignImg} alt="San Francisco City Design" className="ready-img-left-duplex"/> */}
                        <img src={googleSoloImg} alt="Google solo photo" className="ready-img-left-duplex"/>
                        <img src={googleDinoImg} alt="Google dinosaour statue" className="ready-img-right-duplex"/>

                        <br></br>

                        <div className="google-paragraph-1">
                        <img src={googleHQImg} alt="Google campus" className="ready-img-right"/>
                        <p>
                        Googlers were fed very well for free at its many eating options, like cafeterias and food trucks. 
                        The laundromat was free, and the gyms were free. 
                        Some people even lived in their cars on parking lots to save up money for their start-up. 
                        This was just the tip of the iceberg. 
                        Google truly did care about its employees to focus on what mattered, that is, putting in the good work and creating the good product. 
                        Sure, I’ve heard some ex-employees calling it a factory because of these perks. 
                        But for me, as someone who has always been at the shorter of the stick, working for a company that cares about my professional progress and has morals that align with mine, is honestly, a unicorn. 
                        </p>
                        </div>

                        <br></br>

                        <div className="google-paragraph-2">
                        <img src={pinkSunriseImg} alt="Pink sunrise on ANU campus" className="ready-img-left"/>
                        <p>
                        This was just a small section of my journey, and I could keep you with me for half a day for the full story. 
                        Actually, if you’ve read this far, you are a legend, and thank you so much for taking the time to read my story. 
                        As a born-again christian I strongly believe that nothing in life is really up to us. 
                        The day I was born, God decided to make me into a highly-sensitive Korean child. 
                        And He decided to send me away to live with a Korean immigrant family going through a busy existential crisis in Sydney. 
                        I grew up with three older sisters who loved me as their youngest brother. 
                        Even if I wasn’t a programmer from a young age like some prodigies, I still discovered by myself at a young age my love for creating beautiful things by baking cakes and cookies. 
                        Following instructions in recipes, and tweaking it to see if I can create something more gourmet. 
                        Growing up in a large family, where there was sometimes too much noise, I learnt that beautiful things can be achieved when people come together towards one goal without outdated restrictions. 
                        Within His book that contains my entire life, God has planned different hardships to turn my path in uncertain ways. 
                        Because of this, I was privileged to travel to the Bay Area, and out of all the various seminars that are frequently run at ANU, I somehow decided to go to Google’s seminar. 
                        And when I came back to Sydney, I took a gap semester and studied web development to make this web application today.
                        </p>
                        </div>
                        
                        <br></br>

                        <p>
                        Life really is not up to us, but we make decisions from the ideas and resources that are given to us at certain times. 
                        I am just a vessel for God’s mysterious plans. 
                        Throughout life, I was always the weak one or the one who always had more obstacles to overcome. 
                        Somehow, my life was never simple and the same things that others would easily overcome, I struggled. 
                        But everyday I challenge to become a better version of myself, and now I am always grateful and proudly display my weaknesses to the world that feeds the myth that only the strong survives. 
                        To finish off, this is one of my favourite verses in the Bible:
                        </p>

                        <br></br>

                        <p className="bible-verse">
                        “But God chose the foolish things of the world to shame the wise; God chose the weak things of the world to shame the strong. 
                        God chose the lowly things of this world and the despised things - and the things that are not - to nullify the things that are, so that no one may boast before him.” — 1 Corinthians 1:27-29
                        </p>
 
                        <br></br>

                        <p>
                        My path has led me here. 
                        I am ready to soak in the valuable experiences that I will receive from Google, and take my journey to another level. 
                        I am ready to work for you.
                        </p>
                        
                    </div>
                </div>
                <FixedBottomDecoration/>
            </div>
        );
    }
}

export default Ready;