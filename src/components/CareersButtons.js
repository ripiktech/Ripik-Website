import React from 'react';
import './CSS/CareerButtons.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--career--primary', 'btn--career--outline', 'btn--test'];

const SIZES = ['btn--career--medium', 'btn--career--large', 'btn--career--small'];

const POSITION = ['btn--career-left', 'btn--career-mid', 'btn--career-right'];


export const CareersButtons = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonPosition,
  linkName
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];


  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const checkButtonPosition = POSITION.includes(buttonPosition) ? buttonPosition : POSITION[0];


  return (
    <Link to={{pathname : `${linkName}`}} className='btn--career-mobile' target="_blank">
      <button
        className={`btn--career ${checkButtonStyle} ${checkButtonSize} ${checkButtonPosition}` }
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
