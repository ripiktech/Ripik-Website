import React from 'react';
import './CSS/Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Industries we serve</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/industries/power.png'
              text='Power'
              label='Power'
            />
            <CardItem
              src='images/industries/metals.png'
              text='Metals'
              label='Metals'
            />
            <CardItem
              src='images/industries/chemicals.png'
              text='Chemicals'
              label='Chemicals'
            />
            <CardItem
              src='images/industries/pharma.png'
              text='Pharmaceuticals'
              label='Pharmaceuticals'
            />
            
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
