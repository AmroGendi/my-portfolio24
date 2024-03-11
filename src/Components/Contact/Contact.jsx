import React, {useRef, useEffect} from 'react'
import './contact.css'

import { FaLinkedin } from "react-icons/fa";
import { TbArrowBigRightLines } from "react-icons/tb";
import { FaFacebookSquare  } from "react-icons/fa";
import { FaSquareXTwitter  } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";


import Aos from 'aos'
import 'aos/dist/aos.css'

import emailjs from 'emailjs-com';


const Contact = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, []);
  
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_6wotq74', 'template_yebp2qb', form.current, {
        publicKey: 'bVVRawOi5xthJOioA',
      })
      e.target.reset()
  };


  return (
    <section id='contact' className='contact section container'>

      <div className="sectionTitle">
        <span className="titleNumber">04.</span>
        <h5 className="titleTxt">Contact
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>


      <div className="contactContainer grid">


        <div data-aos="fade-right" data-aos-duration="2000" className="socialContacts grid">
          <h3>Talk To Me</h3>

          <div className="cards grid">
            
            <div className="card">
              <div>
              <FaLinkedin className='icon'/>
              </div>
              <h4>LinkedIn</h4>
              <span className='userName'>
                @amrogendi5
              </span>

              <div>
                <a href="https://www.linkedin.com/" className='flex'>
                  Send Message
                  <TbArrowBigRightLines className='icon'/>
                </a>
              </div>
            </div>


            <div className="card">
              <div>
              <FaFacebookSquare   className='icon'/>
              </div>
              <h4>Facebook</h4>
              <span className='userName'>
                AmroG5
              </span>

              <div>
                <a href="https://www.facebook.com/" className='flex'>
                  Send Message
                  <TbArrowBigRightLines className='icon'/>
                </a>
              </div>
            </div>


            <div className="card">
              <div>
              <FaSquareXTwitter   className='icon'/>
              </div>
              <h4>Twitter</h4>
              <span className='userName'>
                @amrogendi5
              </span>

              <div>
                <a href="https://www.twitter.com/" className='flex'>
                  Send Message
                  <TbArrowBigRightLines className='icon'/>
                </a>
              </div>
            </div>

            <div className="card">
              <div>
              <SiGmail   className='icon'/>
              </div>
              <h4>Gmail</h4>
              <span className='userName'>
                amrogendi@gmail.com
              </span>

              <div>
                <a href="https://www.twitter.com/" className='flex'>
                  Send Message
                  <TbArrowBigRightLines className='icon'/>
                </a>
              </div>
            </div>


          </div>
        </div>


        <div data-aos="fade-left" data-aos-duration="2000" className="form grid">
          <h3>Send me an email</h3>

          <form ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder='Enter Your Name' name='name' />
            <input type="text" placeholder='Enter Your Email' email='email' />
            <textarea name="message" placeholder='Enter Your Message'></textarea>
            <button className='formBtn' type='submit' name='submit'>
              Send
            </button>
          </form>
        </div>


      </div>
    </section>
  )
}

export default Contact