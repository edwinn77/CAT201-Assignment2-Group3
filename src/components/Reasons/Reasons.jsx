import React from 'react'
import './Reasons.css'
import image11 from '../../assets/image 11.png';
import image12 from '../../assets/image 12.png';
import image13 from '../../assets/image 13.png';
import image14 from '../../assets/image 14.png';
import herman from '../../assets/hermanmiller.png';
import ikea from '../../assets/ikea.png';
import tick from '../../assets/tick.png';
import unitedwoodwork from '../../assets/unitedwoodwork.jpg';
import woodenstreet from '../../assets/woodenstreet.jpg';
const Reasons = () => {
  return (
    <div className='Reasons' id='reasons'>
        <div className="left-r">
            <img src={image11} alt="" />
            <img src={image12} alt="" />
            <img src={image13} alt="" />
            <img src={image14} alt="" />
        </div>
        <div className="right-r">
            <span>some reasons</span>

            <div>
                <span className="stroke-text">why</span>
                <span> choose us?</span>
            </div>


            <div className='details-r'>
            <div>
                <img src={tick} alt=""></img>
                <span>WIDE SELECTION OF STYLES</span>
            </div>
            <div>
                <img src={tick} alt="" />
                <span>PERSONALIZED INTERIOR SOLUTIONS</span>
            </div>
            <div>
                <img src={tick} alt="" />
                <span>FREE DESIGN CONSULTATION</span>
            </div>
            <div>
                <img src={tick} alt="" />
                <span>FAST AND RELIABLE DELIVERY</span>
            </div>
            <div>
                <img src={tick} alt="" />
                <span>SATISFACTION GUARANTEED</span>
            </div>
            <div>
                <img src={tick} alt="" />
                <span>TRUSTED BRAND</span>
            </div>
            </div>
            <span style={{
                color: 'var(--gray)',
                fontWeight: 'normal',
            }}
            >
                OUR PARTNERS
            </span>

            <div className="partners">
                <img src={woodenstreet} alt="" />
                <img src={herman} alt="" />
                <img src={ikea} alt="" />
                <img src={unitedwoodwork} alt="" />
            </div>
        </div>
    </div>
  );
}

export default Reasons;
