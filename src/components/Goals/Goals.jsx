import React from 'react';
import './Goals.css';
const Goals = () => {
  return (
    <div>
      <div className="Goals" id="goals">
        <div className="left-g">
            <span>Goals</span>
            <span className='stroke-text'>Mission</span>
            <span>Furnituro's mission is to craft refined and functional furniture creations 
                that elevate the soul of every dwelling. We are committed to forging high-quality, 
                avant-garde designs that evoke comfort, elegance, and enduring delight for our 
                cherished clientele.</span>
        </div>
        <div className="right-g">
            <span className='stroke-text'>Vision</span>
            <span>At Furnituro, our vision is to transcend spaces with furniture collections 
                that embody timeless elegance, artistic ingenuity, and unmatched craftsmanship. 
                We aspire to establish ourselves as a preeminent brand synonymous with excellence, 
                inspiring homes and lifestyles around the globe</span>
        </div>
      </div>
    </div>
  )
}

export default Goals;
