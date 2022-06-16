import React from 'react';
import { CareersButtons } from './CareersButtons';
import './CSS/Cards.css';
function CareerCardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link__career' to={props.path}>
          <figure className='cards__item__pic-wrap__career' data-category={props.label}>
            <img
              className='cards__item__img__career'
              alt='Image'
              src={props.src}
            />

<CareersButtons
          className='btns--career'
          buttonStyle='btn--career--outline'
          buttonSize='btn--career--small'
          buttonPosition='btn--career-right'
          linkName={props.linkName}
          >
            Job description

        </CareersButtons>
          </figure>
          <div className='cards__item__info'>
            <p className='career__cards__item__text'>{props.text}</p>
            <br/>
          {/* </div>
          <div className='cards__item__info'> */}
            <p className='career__cards__item__text2'>{props.text2}</p>
          </div>

        <CareersButtons
          className='btns--career'
          buttonStyle='btn--career--primary'
          buttonSize='btn--medium'
          buttonPosition='btn-left'
          linkName='mailto:support@example.com'
          >
          Apply Now
        </CareersButtons>
        <br/>
        </div>
        

        
      </li>
    </>
  );
}

export default CareerCardItem;
