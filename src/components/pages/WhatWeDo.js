import React from 'react';
import '../../App.css';
import Clients from '../Clients';
// import ClientTestimonial from '../ClientTestimonial';
import Footer from '../Footer'
import Products from '../Products';
import WhatWeDoHeroSection from '../WhatWeDoHeroSection';


function WhatWeDo() {
  window.scroll({
    top: 0,
    left: 0
 });
  return (
    <>
      <WhatWeDoHeroSection/>
      <Products/>
      <Clients/>
      {/* <ClientTestimonial/> */}
      <Footer/>
    </>
  );
}

export default WhatWeDo;
