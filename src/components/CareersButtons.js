import React from 'react';
import './CSS/Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

const POSITION = ['btn-left', 'btn-mid', 'btn-right'];


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
    <Link to={{pathname : `${linkName}`}} className='btn-mobile' target="_blank">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonPosition}` }
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
