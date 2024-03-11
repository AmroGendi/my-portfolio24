import React, { useEffect } from "react";
import "./home.css";

import Aos from 'aos'
import 'aos/dist/aos.css'

import { TypeAnimation } from "react-type-animation";

import {
  BiChevronDown,
  BiLogoGithub,
  BiLogoTwitter,
  BiLogoYoutube,
} from "react-icons/bi";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Home = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, []);
  
  return (
    <section id="home" className="home section">
      {/* <div className="leftIcons">
        <div className="socials grid">
          <a href="https://github.com" target="_blank">
            <BiLogoGithub className="icon" />
          </a>
          <a href="https://twitter.com/" target="_blank">
            <BiLogoTwitter className="icon" />
          </a>
          <a href="https://youtube.com" target="_blank">
            <BiLogoYoutube className="icon" />
          </a>
        </div>

        <div className="line"></div>
      </div> */}

      <div className="container homeContainer">
        <div data-aos="fade-up" data-aos-duration="2000" className="info grid">
        <span className="introTxt">Hi, my name is,</span>
        <TypeAnimation className="title"
          sequence={[
            "Amro",
            800,
            "Amro Gendi", //  Continuing previous Text
            800,
            "Amro",
            800,
            "",
            800,
          ]}
          style={{ fontSize: "2em" }}
          repeat={Infinity}
        />
        </div>
        
        <span data-aos="fade-up" data-aos-duration="3000" className="subTitle">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </span>
        <p data-aos="fade-up" data-aos-duration="4000" className="homeParagraph">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error,
          doloribus assumenda. Pariatur, fugiat.
        </p>
        <div data-aos="fade-up" data-aos-duration="5000" className="lowerHomeSection">
          <button className="contactBtn">
            <a href="#contact" className="flex">
              Contact Me <MdKeyboardDoubleArrowRight className="icon" />
            </a>
          </button>

          <div className="scrollDiv">
            <a href="#about" className="flex"></a>
            <h6 className="scroll">Scroll Down</h6>{" "}
            <BiChevronDown className="icon" />
          </div>
        </div>
      </div>

      {/* <div className="rightEmail">
        <div>
          <div className="emailAddress">
            <a href="http://mailto:youremail@mail.com" target="_blank">
              youremail@***mail.com
            </a>
          </div>

          <div className="line"></div>
        </div>
      </div> */}
    </section>
  );
};

export default Home;
