import React from 'react';
import './CSS/LifeAtRipik.css';
import './CSS/Cards.css'


function ClientsCarousal() {
  return (
    <div className='cards__client'>
      <h1>We have a prestigious client base</h1>
      {/* <div className='cards__container'> */}
      <div className='slider__container'>
      <div className='slider'>
          <div className='slide-track'>
              
              <div className='slide'>
                  <img src = 'images/clients/pgpglass.png' alt = '' />
              </div>
              <div className='slide'>
                  <img src = 'images/clients2/aditya-birla.png' alt = '' />
              </div>
              <div className='slide'>
                  <img src = 'images/clients2/grasim.svg' alt = '' />
              </div>
              <div className='slide'>
                  <img src = 'images/clients2/ultratech.png' alt = '' />
              </div>
              <div className='slide'>
                  <img src = 'images/clients2/godrej-n-boyce.png' alt = '' />
              </div>
              <div className='slide'>
                  <img src = 'images/clients2/godrej-interio.png' alt = '' />
              </div>
              <div className='slide'>
                  <img src = 'images/clients2/godrej-aerospace.png' alt = '' />
              </div>
              <div className='slide'>
                  <img src = 'images/clients2/piramal.png' alt = '' />
              </div>
              
              <div className='slide'>
                  <img src = 'images/clients/jindal-power.png' alt = '' />
              </div>
              <div className='slide'>
                  <img src = 'images/clients2/vedanta.png' alt = '' />
              </div>

              <div className='slide'>
                  <img src = 'images/clients2/dcm-shriram.png' alt = '' />
              </div>
              <div className='slide'>
                  <img src = 'images/clients/pgpglass.png' alt = '' />
              </div>
              
              
              
              
              
              

              
              

              

              
              
              
          </div>
      </div>
      {/* <h1>Image carousel</h1> */}
      
    </div>

      {/* </div> */}
    </div>
  );
}

export default ClientsCarousal;

