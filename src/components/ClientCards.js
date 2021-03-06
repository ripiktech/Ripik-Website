import React from 'react';
// import { Link } from 'react-router-dom';
import './CSS/Cards.css'
function CardItem(props) {
  return (
    <>
      <li className='cards__item__client'>
        <div className='cards__item__link__client'>
          <figure className='cards__item__pic-wrap__client' data-category={props.label}>
            <img
              className='cards__item__img__client'
              alt='Image'
              src={props.src}
            />
          </figure>
          {/* <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div> */}
        </div>
      </li>
    </>
  );
}

export default CardItem;
