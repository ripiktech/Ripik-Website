import React from 'react';
import './CSS/Cards.css'
// import Tooltip from 'react-tooltip-lite';
import ClientTooltip from './Client_tooltip';
import './CSS/Client_tooltip.css';


const imageFolder = 'clients2';
function Clients() {
  return (
    <div className='cards__client'>
      <h1>We have a prestigious client base</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>

          <ClientTooltip
              name='Aditya Birla'
              logo='images/clients2/aditya-birla.png'
              details='Ripik AI APC at work! We are serving several marquee businesses of the group in operational excellence journeys such as yield improvement, throughput optimization, chemical cost reduction.'
              images='images/clients/aditya-birla.png'>
            </ClientTooltip>
            <ClientTooltip
              name='Grasim'
              logo='images/clients/grasim.png'
              details='Ripik APC at work! Improved pulp quality control by 50% by soft sensorisation and ML led chemical addition. AI modeling across the value chain and dynamic control to improve end to end quality '
              images='images/clients/grasim-2.png'>
            </ClientTooltip>
            <ClientTooltip
              name='Ultratech'
              logo='images/clients2/ultratech.png'
              details='Ripik vision at work! Patent pending computer vision model to understand the cement kiln and power plant operations. Improvement in boiler steam heat rate and throughput and energy efficiency in cement kiln.'
              images='images/clients/ultratech-2.png'>
            </ClientTooltip>
            <ClientTooltip
              name='Godrej & Boyce'
              logo='images/clients2/godrej-n-boyce.png'
              details='Godrej and Boyce is India’s pride, a business that has lasted 125+ years. We are their AI software partners across the group. Ripik Optimus and Ripik vision are deployed in several group businesses and are leading to throughput, yield and cost improvements. '
              images='images/clients/godrej-and-boyce-2.png'>
            </ClientTooltip>
            </ul>

            <ul className='cards__items'>
            <ClientTooltip
              name='Godrej interio'
              logo='images/clients2/godrej-interio.png'
              details='Most likely you have a Godrej almirah in your house, isnt it? Ripik vision at work to ensure they are flawless. We are reducing defects such as rust, excess paint - all via our proprietary computer vision based rust detection and paint application system.'
              images='images/clients/godrej-interio-2.png'>
            </ClientTooltip>
            <ClientTooltip
              name='Godrej aerospace'
              logo='images/clients2/godrej-aerospace.png'
              details='They are the engine suppliers to Brahmos missile as well as ROlls Royce. How to make a Brahmos missile faster? How to ensure the build is stronger? Ripik APC at work.'
              images='images/clients/godrej-aerospace-2.png'>
            </ClientTooltip>
            <ClientTooltip
              name='Piramal'
              logo='images/clients2/piramal.png'
              details='Serving several group businesses in their AI journeys. We are the thoughtpartners to the CXO brass. Several of their businesses where we have partnered are case studies of Fortune 100, Microsoft icons amongst others.'
              images='images/clients/piramal-2.png'>
            </ClientTooltip>
            <ClientTooltip
              name='PGP glass'
              logo='images/clients/pgp-glass.png'
              details='All delightfull stuff in the world, say costmetics or Jack Daniel,  come packaged in PGP glass bottles.. Ripik Optimus and Ripik APC at work to reduce furnace energy by 10%, and also that the perfume bottles are spotless. Reach out to know more.  '
              images='images/clients/pgp-glass-2.png'>
            </ClientTooltip>
            </ul>

            <ul className='cards__items'>
            <ClientTooltip
              name='Jindal steel and power ltd'
              logo='images/clients/jindal.png'
              details='JSPL is India’s number 1 steel maker. Our AI product - Ripik Optimus has led 1% yield improvement in plate mill via optimal combination of which plates to make from which slabs. '
              images='images/clients/jspl-2.png'>
            </ClientTooltip>
            <ClientTooltip
              name='Vedanta aluminium'
              logo='images/clients2/vedanta.png'
              details='Ripik Optimus at work to reduce energy consumption and improve efficiency in industrial settings'
              images='images/clients/vedanta-2.png'>
            </ClientTooltip>
            <ClientTooltip
              name='DCM Shriram'
              logo='images/clients2/dcm-shriram.png'
              details='Ripik Optimus at work. Chlor alkali operating system that reduces power consumption by 3% in all electrolysis processes. Million dollar savings at the click of a button. '
              images='images/clients/dcm-shriram-2.png'>
            </ClientTooltip>
            
            </ul>

          
        </div>
      </div>
    </div>
  );
}

export default Clients;
