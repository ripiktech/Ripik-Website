
import React from 'react';
import '../App.css';
// import { Button } from './Button';
import './CSS/Count-up.css';
import CountUp from 'react-countup'


const countTime = 2;
const delayTime = 3;

function TeamCounterAnimation() {

  return (
        <div className='count-container-wrapper'>
        <div className='count-container'>
            


<div className="card">
    <div className="imgAnimated">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div className="contentAnimated">
    </div>
</div>
                        
                       
                        <p>
                        <CountUp
                        start={0}
                        end={20}
                        delay={delayTime}
                        duration={countTime}
                        separator=" "
                        decimals={0}
                        suffix="  member and growing team Ex-McKinsey, Ex-Google, Ex-IBM"
                        >
                        </CountUp>
                        <br/>
                        <CountUp      
                            start={0}
                            end={10}
                            delay={delayTime}
                            duration={countTime}
                            separator=" "
                            decimals={0}
                            suffix="+ Graduates from IIT"
                            >
                        </CountUp><br/>

                        <CountUp
                            start={0}
                            end={8}
                            delay={delayTime}
                            duration={countTime}
                            separator=" "
                            decimals={0}
                            suffix="+ Machine Learning engineers"
                            >
                        </CountUp><br/>

                        <CountUp
                            start={0}
                            end={3}
                            delay={delayTime}
                            duration={countTime}
                            separator=" "
                            decimals={0}
                            suffix="+ Backend developers"
                            >
                        </CountUp><br/>

                        <CountUp
                            start={0}
                            end={5}
                            delay={delayTime}
                            duration={countTime}
                            separator=" "
                            decimals={0}
                            suffix="+ Frontend developers"
                            >
                        </CountUp><br/>

                        <CountUp 
                            start={0}
                            end={2}
                            delay={delayTime}
                            duration={countTime}
                            separator=" "
                            decimals={0}
                            suffix="+ UI/UX Experts"
                            >
                        </CountUp>

                        
                    </p>

                    

            
            
        </div>


         </div>
  );
}

export default TeamCounterAnimation;
