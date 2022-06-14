import React from 'react';
// import { Link } from 'react-router-dom';
import Tooltip from 'react-tooltip-lite';
import './CSS/Client_tooltip.css'
import CardItem from './ClientCards';

function ClientTooltip(props) {
  return (
    <>
      <Tooltip
              content={(
                <div>
                  <div class="post-container">                
                    
                    <div class="post-content">
                        <h3 class="post-title">{props.name}</h3>
                        <p>
                            {props.details}
                            {/* <img className = 'post-thumb' src={props.images} /> */}
                        </p>
                        
                    </div>
                  </div>
                </div>
              )}
              direction="right"
              tagName="span"
              className="target custom-box"
              tipContentClassName=""
              color="#fff"
              background="#222222"
            >
            <CardItem
              src={props.logo}
              text={props.name}
            />
            </Tooltip>
    </>
  );
}

export default ClientTooltip;


