import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';
import Products from '../Products';
import Clients from '../Clients';
// import OurStory from '../OurStory';


function Home() {
  window.scroll({
    top: 0,
    left: 0
 });
  return (
    <>
      <HeroSection/>
      <Products/>
      <Cards/>
      <Clients/>
      {/* <OurStory/> */}
      <Footer/>
    </>
  );
}

export default Home;
