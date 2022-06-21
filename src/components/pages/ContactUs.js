import React from 'react';
import '../../App.css';
import Contact from '../Contact';
import Footer from '../Footer'



function ContactUs() {
  window.scroll({
    top: 0,
    left: 0
 });
  return (
    <>
      <Contact/>
      <Footer/>
    </>
  );
}

export default ContactUs;
