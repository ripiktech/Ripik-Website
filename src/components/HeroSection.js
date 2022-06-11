import React from 'react';
import '../App.css';
import { Button } from './Button';
import './CSS/HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-3.mp4' autoPlay loop muted />
      <h1>Ripik AI</h1>
      
      <p>Our mission is to make manufacturing more efficient by enabling more intelligent operations.</p>
      <p>We transform how people operate factories.</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          linkName='/who-are-we'
        >
          Know about us
        </Button>
        
      </div>
    </div>
  );
}

export default HeroSection;
