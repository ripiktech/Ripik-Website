import React from 'react';
import '../../App.css';
import Footer from '../Footer'
import Team from '../Team';
import Partners from '../Partners';
import WhoAreWeHeroSection from '../WhoAreWeHeroSection';
import LifeAtRipik from '../LifeAtRipik';
import Careers from '../Careers';
import TeamCounterAnimation from '../TeamCounterAnimation';

function WhoAreWe() {
  return (
    <>
      <WhoAreWeHeroSection/>
      <TeamCounterAnimation/>
      {/* <LifeAtRipik/> */}
      <Partners/>
      <Team/>
      <Careers/>
      <Footer/>
    </>
  );
}

export default WhoAreWe;
