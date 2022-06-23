import React from 'react';
import './CSS/Partners.css';
import CardItem from './PartnerCards';

function Partners() {
  return (
    <div className='cards2'>
      <h1>Our partners</h1>
      <div className='cards__container2'>
        <div className='cards__wrapper2'>
          <ul className='cards__items2'>
            <CardItem
              src='images/partners/aws.png'
              // text='Power'
              // label='Power'
            />
            <CardItem
              src='images/partners/ventureHighway.png'
            />
            <CardItem
              src='images/partners/accel.svg'
            />
            <CardItem
              src='images/partners/msazure.png'
            />
            </ul>
            <ul className='cards__items2'>
            <CardItem
              src='images/partners/google.png'
            />
            <CardItem
              src='images/partners/forceVentureslarge.png'
            />
            <CardItem
              src='images/partners/titanCapital.png'
            />
            <CardItem
              src='images/partners/goodCapital.png'
            />
            
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Partners;
