import React from 'react';
import { Link } from 'react-router-dom';



function CardItem(props) {
  // const [ stateImage, setStateImage ] =useState(false);
  const hoverImg = props.hoverImg;
  const baseImg = props.src;
  function MouseOver(e) {
    e.currentTarget.src = hoverImg;
  }
  function MouseOut(e) {
    e.currentTarget.src = baseImg;
  }
  return (
    <>
      <li className='cards__item__prod'>
        <div className='cards__item__link'>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img__prod'
              src={props.src}
              onMouseOver={MouseOver} 
              onMouseOut={MouseOut}
              
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
