import React, {useEffect} from "react";

import Aos from 'aos'
import 'aos/dist/aos.css'

import { BiSolidQuoteLeft } from "react-icons/bi";

import "./tesimonials.css";

import avatar from "../../Assets/avatar.jpg";
import avatar2 from '../../Assets/avatar2.jpg'
import avatar3 from '../../Assets/avatar3.jpg'

import comp from "../../Assets/clogo1.png";
import comp2 from '../../Assets/clogo2.png'
import comp3 from '../../Assets/clogo3.png'

const Testimonials = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])
  
  return (
    <section id="tesimonials" className="tesimonials container section">
      <div className="sectionTitle">
        <span className="titleNumber">04.</span>
        <h5 className="titleTxt">
          Testimonials
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>

      <div data-aos="fade-up" data-aos-duration="2000" className="testiContainer grid">

        <div className="singleTesti">
          <div className="imgDiv flex">
            <img src={avatar} />
            <div className="userInfo flex">
              <h4 className="name">Henry Brooks</h4>


              <h5 className="position">Internet Marketing Manager</h5>

            </div>
          </div>

          <div className="quoteDiv">
            <BiSolidQuoteLeft className="iconq" />
            <p className="txt">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              laborum facilis earum? Culpa iusto qui alias id earum repudiandae
              reiciendis.
            </p>
            <br />
            <p className="txt">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
              provident beatae vel iste? Magni, necessitatibus!
            </p>
          </div>

          <div className="Info flex">
            <div className="companyImg">
              <img src={comp} />
            </div>

            <div className="compInfo flex">
              <h5 className="cName">Flipping Strategy</h5>
              <h5 className="cName">www.fstrategy.com</h5>
            </div>
          </div>
        </div>

        <div className="singleTesti">
          <div className="imgDiv flex">
            <img src={avatar2} />
            <div className="userInfo flex">
              <h4 className="name">Mary Davis</h4>
              <h5 className="position">Operations Analyst</h5>
            </div>
          </div>

          <div className="quoteDiv">
            <BiSolidQuoteLeft className="iconq" />
            <p className="txt">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              laborum facilis earum? Culpa iusto qui alias id earum repudiandae
              reiciendis.
            </p>
            <br />
            <p className="txt">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
              provident beatae vel iste? Magni, necessitatibus!
            </p>
          </div>

          <div className="Info flex">
            <div className="companyImg">
              <img src={comp2} />
            </div>

            <div className="compInfo flex">
              <h5 className="cName">Bennetts Consulting</h5>
              <h5 className="cName">www.benconsult.com</h5>
            </div>
          </div>
        </div>

        <div className="singleTesti">
          <div className="imgDiv flex">
            <img src={avatar3} />
            <div className="userInfo flex">
              <h4 className="name">Aaron Tucker</h4>
              <h5 className="position">E-Learning Manager</h5>
            </div>
          </div>

          <div className="quoteDiv">
            <BiSolidQuoteLeft className="iconq" />
            <p className="txt">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              laborum facilis earum? Culpa iusto qui alias id earum repudiandae
              reiciendis.
            </p>
            <br />
            <p className="txt">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
              provident beatae vel iste? Magni, necessitatibus!
            </p>
          </div>

          <div className="Info flex">
            <div className="companyImg">
              <img src={comp3} />
            </div>

            <div className="compInfo flex">
              <h5 className="cName">Dreaming Brains</h5>
              <h5 className="cName">www.drm-brains.com</h5>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
