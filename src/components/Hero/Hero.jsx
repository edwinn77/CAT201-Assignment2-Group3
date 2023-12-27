import React from 'react';
import './Hero.css';
import Header from '../Header/Header';
import hero_image from '../../assets/hero_image.png';
import hero_image1 from '../../assets/hero_image1.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import NumberCounter from 'number-counter';
import {motion} from 'framer-motion';
import video from '../../assets/video2.mp4';
const Hero = () => {

  const transition = {type: 'spring', duration: 3}
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id='home'>
      <div className="blur hero-blur"></div>
        <div className="left-h">
          <Header/>
{/*the best ad */}
          <div className="the-best-ad">
            <motion.div
            initial={{left: mobile? "165px": "238px"}}
            whileInView={{left: '8px'}}
            transition={{...transition, type: 'tween'}}
            ></motion.div>
            <span>the finest furniture store in the town</span>
          </div>

          {/*Hero Heading*/}
          <div className="hero-text">
            <div>
              <span className='stroke-text'>Design </span>
              <span>Your</span>
            </div>
            <div>
              <span>Dream </span>
              <span className='stroke-text'>Furniture </span>
            </div>
            <div>
              <span>
              Craft your perfect furniture, enhancing your living space to its fullest potential.
              </span>
            </div>
          </div>
            
            {/*figures*/}
            <div className="figures">
              <div>
                <span>
                  <NumberCounter end={250} start={150} delay='4' preFix="+"/>
                </span>
                <span>exquisite pieces crafted</span>
              </div>
              <div>
                <span>
                <NumberCounter end={1500} start={1200} delay='4' preFix="+"/>
                </span>
                <span>satisfied customers served</span>
              </div>
              <div>
                <span>
                <NumberCounter end={75} start={30} delay='4' preFix="+"/>
                </span>
                <span>unique design collections</span>
              </div>
            </div>

            {/*hero buttons*/}
            <div className="hero-buttons">
              <buttons className="btn">Get Started</buttons>
              <buttons className="btn">Learn More</buttons>
            </div>
        </div>
      <div className="right-h">
        <button className="btn">Shop Now</button> 
        <div className="main">
        <video src={video} className="back-video" autoPlay loop muted></video>
      </div>
        {/* <motion.div 
        initial={{ right: "-1rem"}}
        whileInView={{ right: "4rem"}}
        transition={transition}
        className="heart-rate">
          <img src={Heart} alt=""/>
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div> */}

        {/*hero images*/}
        {/* <img src={hero_image} alt="" className="hero-image" />
        <motion.img
         initial={{right: '11rem'}}
         whileInView={{right: '20rem'}}
         transition={transition}
         src={hero_image_back} alt="" className="hero-image-back" /> */}
        { /*calories*/}
        {/* <motion.div
          initial={{ right: "37rem"}}
          whileInView={{right: "28rem"}}
          transition={transition}
          className="calories"
          >
          <img src={Calories} alt="" />
          <div>
          <span>Calories Burned</span>
          <span>220 kcal</span>
          </div>
        </motion.div> */}
      </div>
    </div>
  );
};  

export default Hero;