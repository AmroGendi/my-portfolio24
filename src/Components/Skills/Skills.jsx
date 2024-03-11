import React, {useEffect} from "react";
import "./skills.css";

import Aos from 'aos'
import 'aos/dist/aos.css'

import { SiAdobexd } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { DiResponsive } from "react-icons/di";
import { CgDebug } from "react-icons/cg";
import { FaChrome } from "react-icons/fa";

const Skills = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])
  
  return (
    <section id="skills" className="skills container section">
      <div className="sectionTitle">
        <span className="titleNumber">02.</span>
        <h5 className="titleTxt">
          Skills
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>

      <div data-aos="fade-up" data-aos-duration="2000" className="skillsContainer grid">

        <div className="skillsGroup">
          <div className="groupTitle">
            <h2 className="title">Basic</h2>
            <span className="subTitle">2 Years Experience</span>
          </div>

          <div className="generalSkills">
            <div className="singleSkill">
              <div className="iconBox flex">
                <FaHtml5 className="icon" />
              </div>
              <span className="skillName">HTML</span>
            </div>
            <div className="singleSkill">
              <div className="iconBox flex">
                <FaCss3Alt className="icon" />
              </div>
              <span className="skillName">CSS</span>
            </div>
            <div className="singleSkill">
              <div className="iconBox flex">
                <IoLogoJavascript className="icon" />
              </div>
              <span className="skillName">Javascript</span>
            </div>

          </div>
        </div>

        <div className="skillsGroup">
          <div className="groupTitle">
            <h2 className="title">Framework</h2>
            <span className="subTitle">1 Years Experience</span>
          </div>

          <div className="generalSkills">
            <div className="singleSkill">
              <div className="iconBox flex">
                <FaReact className="icon" />
              </div>
              <span className="skillName">React</span>
            </div>
            <div className="singleSkill">
              <div className="iconBox flex">
                <FaBootstrap className="icon" />
              </div>
              <span className="skillName">Bootstrap</span>
            </div>
            <div className="singleSkill">
              <div className="iconBox flex">
                <FaSass className="icon" />
              </div>
              <span className="skillName">Sass</span>
            </div>
          </div>
        </div>

        <div className="skillsGroup">
          <div className="groupTitle">
            <h2 className="title">Design</h2>
            <span className="subTitle">2 Years Experience</span>
          </div>

          <div className="generalSkills">
            <div className="singleSkill">
              <div className="iconBox flex">
                <SiAdobexd className="icon" />
              </div>
              <span className="skillName">Adobe XD</span>
            </div>
            <div className="singleSkill">
              <div className="iconBox flex">
                <FaFigma className="icon" />
              </div>
              <span className="skillName">Figma</span>
            </div>
            <div className="singleSkill">
              <div className="iconBox flex">
                <SiAdobephotoshop className="icon" />
              </div>
              <span className="skillName">Photoshop</span>
            </div>
          </div>
        </div>

        <div className="skillsGroup">
          <div className="groupTitle">
            <h2 className="title">Tools</h2>
            <span className="subTitle">1 Years Experience</span>
          </div>

          <div className="generalSkills">
            <div className="singleSkill">
              <div className="iconBox flex">
                <DiResponsive className="icon" />
              </div>
              <span className="skillName">Responsive</span>
            </div>
            <div className="singleSkill">
              <div className="iconBox flex">
                <CgDebug className="icon" />
              </div>
              <span className="skillName">Debugging</span>
            </div>
            <div className="singleSkill">
              <div className="iconBox flex">
                <FaChrome className="icon" />
              </div>
              <span className="skillName">DevTools</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
