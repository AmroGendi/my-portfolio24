import React, {useEffect} from "react";
import "./about.css";

import Aos from 'aos'
import 'aos/dist/aos.css'

import { BiCloudDownload } from "react-icons/bi";

import amr from "../../Assets/amr.jpg";

const About = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, []);
  
  return (
    <section id="about" className="section about container">
      <div data-aos="fade-up" data-aos-duration="2000" className="sectionTitle">
        <span className="titleNumber">01.</span>
        <h5 className="titleTxt">
          About
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>

      <div className="sectionContent grid">
        <div className="txtSection">
          <h4 data-aos="fade-up" data-aos-duration="3000">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor modi
            voluptatum atque inventore adipisci ad voluptates tenetur quae
            mollitia.
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
            repudiandae nam cupiditate magni vero natus.
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam in
            optio repudiandae, est assumenda asperiores ea officiis voluptate
            omnis ipsum.
          </h4>

          <div data-aos="fade-up" data-aos-duration="4000" className="aboutBtn">
            <a href="donloadcv.docx" download="donloadcv.docx" className="flex">
              Donwload CV <BiCloudDownload className="icon" />
            </a>
          </div>
        </div>

        <div data-aos="fade-left" data-aos-duration="2000" className="imgDiv">
          <img src={amr} className="aboutImg" />
        </div>
      </div>
    </section>
  );
};

export default About;
