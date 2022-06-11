import React from 'react';
import '../App.css';
import './HeroSection.css';

function LifeAtRipikHeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/teamvideo2.mp4' autoPlay loop muted />
      <h1 >Life at Ripik</h1>
    </div>
  );
}

export default LifeAtRipikHeroSection;
