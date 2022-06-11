import React from 'react';
import { CareersButtons } from './CareersButtons';
function CareerCardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <p className='cards__item__text'>{props.text}</p>
            <br/>
          {/* </div>
          <div className='cards__item__info'> */}
            <p className='career__cards__item__text2'>{props.text2}</p>
          </div>


          <CareersButtons
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--medium'
          buttonPosition='btn-mid'
          linkName={props.linkName}
          >
            Download JD

        </CareersButtons>

        
        <br/>

        <CareersButtons
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--medium'
          buttonPosition='btn-mid'
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
