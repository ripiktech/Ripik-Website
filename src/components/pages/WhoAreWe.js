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
  window.scroll({
    top: 0,
    left: 0
 });
  return (
    
    <>
      <WhoAreWeHeroSection/>
      <TeamCounterAnimation/>
      {/* <LifeAtRipik/> */}
      <Partners />
      <section id='ourTeam'><Team/></section>
      <Careers/>
      <Footer/>
    </>
  );
}

export default WhoAreWe;
