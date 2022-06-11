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
              text='Power'
              label='Power'
            />
            <CardItem
              src='images/partners/ventureHighway.jpeg'
              text='Metals'
              label='Metals'
            />
            <CardItem
              src='images/partners/accel.svg'
              text='Chemicals'
              label='Chemicals'
            />
            <CardItem
              src='images/partners/azure.jpg'
              text='Pharmaceuticals'
              label='Pharmaceuticals'
            />
            <CardItem
              src='images/partners/google.png'
              text='Power'
              label='Power'
            />
            <CardItem
              src='images/partners/forceVentures.jpeg'
              text='Metals'
              label='Metals'
            />
            <CardItem
              src='images/partners/titanCapital.jpeg'
              text='Chemicals'
              label='Chemicals'
            />
            <CardItem
              src='images/partners/goodCapital.gif'
              text='Pharmaceuticals'
              label='Pharmaceuticals'
            />
            
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Partners;
