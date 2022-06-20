
import React from 'react';
import '../App.css';
// import { Button } from './Button';
import './CSS/HeroSection.css';
import './CSS/HeroSection-WhoAreWe.css';

import CountUp from 'react-countup'


const countTime = 2;

function WhoAreWeHeroSection() {

  return (

    <div className='hero-container-whoarewe'>
      {/* <video src='/videos/teamvideo2.mp4' autoPlay loop muted /> */}
      <h1>Endless inspiration and meaningful work.</h1>
      <p className = 'careers-details' >We are a set of AI experts from the world's leading institutions backed by some of the most coveted VC firms.</p>
    </div>

  );
}

export default WhoAreWeHeroSection;
