import React, { useState, useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";

import "./navbar.css";

import Aos from "aos";
import "aos/dist/aos.css";

import logo from "../../Assets/a.png";
import light from "../../Assets/light.png";
import night from "../../Assets/night.png";


import { BiWindowClose } from "react-icons/bi";
import { MdOutlineMenuOpen } from "react-icons/md";


const Navbar = ({theme, setTheme}) => {


  const toggleMode = ()=> {
    theme == 'light' ? setTheme ('dark') : setTheme ('light');
  }




  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [active, setActive] = useState("navBar");

  const showNavBar = () => {
    setActive("navBar activeNavBar");
  };

  const removeNavBar = () => {
    setActive("navBar");
  };

  const [activeHeader, setActiveHeader] = useState("header");
  const addBg = () => {
    if (window.scrollY >= 10) {
      setActiveHeader("header activeHeader");
    } else {
      setActiveHeader("header");
    }
  };

  window.addEventListener("scroll", addBg);

  return (
    <header className={activeHeader}>
      <div
        data-aos="fade-right"
        data-aos-duration="3000"
        className="logoDiv flex"
      >
        <img src={logo} />
        <h1 className="logo">
          <a href="#home">Amro </a>
          <small>Gendi.</small>
        </h1>
      </div>

      <div className={active}>
        <ul
          onClick={removeNavBar}
          data-aos="fade-down"
          data-aos-duration="2000"
          className="navLists"
        >
          <li className="navItem">
            <a href="#about" className="navLink">
              <span className="headerNumber">1.</span>About
            </a>
          </li>

          <li className="navItem">
            <a href="#skills" className="navLink">
              <span className="headerNumber">2.</span>Skills
            </a>
          </li>

          <li className="navItem">
            <a href="#projects" className="navLink">
              <span className="headerNumber">3.</span>Projects
            </a>
          </li>

          <li className="navItem">
            <a href="#contact" className="navLink">
              <span className="headerNumber">4.</span>Contact
            </a>
          </li>

          <button className="btn">
            <a href="#contact">Hire Me!</a>
          </button>
        </ul>

        <div onClick={removeNavBar} className="closeNavBar">
          <BiWindowClose className="icon" />
        </div>
      </div>

      <div onClick={showNavBar} className="toggleNavBar">
        <MdOutlineMenuOpen className="icon" />
      </div>

      <ScrollToTop className="totop" smooth color="#ff3452" />
    
    </header>


  );
};

export default Navbar;
