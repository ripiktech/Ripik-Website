import React from 'react';
import '../App.css';
// import { Button } from './Button';
import './CSS/HeroSection.css';

function WhatWeDoHeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/teamvideo2.mp4' autoPlay loop muted />
      <h1 id = 'whatwedo-maintext'>Our AI softwares deliver 10x RoI in 6-9 </h1><br/><br/><br/>
      <h1 id = 'whatwedo-maintext'> months by optimization manufacturing processes.</h1>
      <br/>
      {/* <p className = 'careers-details' >Our AI softwares deliver 10x RoI in 6-9 months by optimization manufacturign processes</p> */}
    </div>
  );
}

export default WhatWeDoHeroSection;
