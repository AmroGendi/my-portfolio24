import React, {useEffect} from "react";
import "./projects.css";

import Aos from 'aos'
import 'aos/dist/aos.css'

import img1 from '../../Assets/Development Company Web Design.png'
import img2 from '../../Assets/Banking Toolkit Web Design.png'
import img3 from '../../Assets/Fitness Club Web Design.png'
import img4 from '../../Assets/Food.Pi Delivery Website Design.jpg'
import img5 from '../../Assets/Future Web3.0 - Website Design.jpg'
import img6 from '../../Assets/Natural Cosmetics - Web design.jpg'
import img7 from '../../Assets/StayPeak Booking Web App.png'


import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";


const data = [
  {
    id:1,
    image: img1,
    demo: 'https://www.youtube.com',
    github: 'https://github.com',
    title: 'Development Company',
    liveLink: 'https://wfc23-variables-cloneable.webflow.io/',
  },
  {
    id:1,
    image: img2,
    demo: 'https://www.youtube.com',
    github: 'https://github.com',
    title: 'Banking Toolkit',
    liveLink: 'https://wfc23-variables-cloneable.webflow.io/',
  },
  {
    id:1,
    image: img3,
    demo: 'https://www.youtube.com',
    github: 'https://github.com',
    title: 'Fitness Club',
    liveLink: 'https://wfc23-variables-cloneable.webflow.io/',
  },
  {
    id:1,
    image: img4,
    demo: 'https://www.youtube.com',
    github: 'https://github.com',
    title: 'Food.Pi Delivery',
    liveLink: 'https://wfc23-variables-cloneable.webflow.io/',
  },
  {
    id:1,
    image: img5,
    demo: 'https://www.youtube.com',
    github: 'https://github.com',
    title: 'Future Web3.0',
    liveLink: 'https://wfc23-variables-cloneable.webflow.io/',
  },
  {
    id:1,
    image: img6,
    demo: 'https://www.youtube.com',
    github: 'https://github.com',
    title: 'Taboo Organics',
    liveLink: 'https://wfc23-variables-cloneable.webflow.io/',
  },
  {
    id:1,
    image: img7,
    demo: 'https://www.youtube.com',
    github: 'https://github.com',
    title: 'StayPeak Booking',
    liveLink: 'https://wfc23-variables-cloneable.webflow.io/',
  },
]

const Projects = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])
  
  return (
    <section id="projects" className="projects container section">
      <div className="sectionTitle">
        <span className="titleNumber">03.</span>
        <h5 className="titleTxt">
          Projects
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>

      <div data-aos="fade-up" data-aos-duration="2000" className="projectContainer grid">
        {
          data.map(({id, image, demo, github, title, liveLink}) => {
            return (
              <div key={id} className="singleProject">

                <div className="externalLinks flex">
                  <div className="youtubeIcon">
                    <a href={demo} target="_blank">
                    <FaYoutube className="icon"/>
                    </a>
                  </div>

                  <div className="githubIcon">
                  <a href={github} target="_blank">
                    <FaGithub  className="icon"/>
                    </a>
                  </div>
                </div>

                <div className="imgDiv">
                  <a href={liveLink} target="_blank">
                    <img src={image} alt={title} />
                  </a>
                </div>

                <div className="projectTitle">
                  <h3>{title}</h3>
                </div>
              </div>
            )
          }) 
        }
      </div>
    </section>
  );
};

export default Projects;
