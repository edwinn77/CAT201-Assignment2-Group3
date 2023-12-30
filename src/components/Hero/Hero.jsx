import React from 'react';
import './Hero.css';
import Header from '../Header/Header';
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
        {/*right-h*/}
      <div className="right-h">
        <button className="btn">Shop Now</button> 
        <div className="main">
        <video src={video} className="back-video" autoPlay loop muted></video>
      </div>
      </div>
    </div>
  );
};  

export default Hero;
