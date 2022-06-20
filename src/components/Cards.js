import React from 'react';
import './CSS/Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards-industries'>
      <h1>Industries we serve</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/industries2/power.png'
              text='Power'
              label='Power'
            />
            <CardItem
              src='images/industries2/metals.png'
              text='Metals'
              label='Metals2'
            />
            <CardItem
              src='images/industries2/chemicals.png'
              text='Chemicals'
              label='Chemicals'
            />
            <CardItem
              src='images/industries2/pharma.png'
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
