import React from 'react';
import './CSS/Cards.css';
import CardItem from './ProductsCards';
import Tooltip from 'react-tooltip-lite';
import './CSS/Client_tooltip.css'
function Products() {





  return (
    <div className='cards-products'>
      <h3>We build AI applications for industrial companies to improve their bottomline without any capex and within 6-9 months.</h3>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <Tooltip
              content={(
                <div>
                  <div class="post-container">                
                    <div class="post-content">
                        <h3 class="post-title">Ripik Optimus</h3>
                        <p>RIpik’s patent pending OR solver  that solves hitherto unsolved operation problems by applying ML. </p>
                        <p>We used it to reduce power cost in a chlor alkali player by 1%.</p>
                        <p>We improved OTIF by 5% and productivity by 3% by optimizing production planning for one of India’s largest companies.</p>
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
              src='./images/products/optimus2.png'
              text='Ripik Optimus'
              hoverImg='./images/products/optimus.png'
            />
            </Tooltip>
            <Tooltip
              content={(
                <div>
                  
                  <div class="post-container">                
                    <div class="post-content">
                        <h3 class="post-title">Ripik AI APC</h3>
                        <p>We have a suite of core AI based APCs that will help to optimise for yield, energy, throughput for large equipments.</p>
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
              src='./images/products/apc2.png'
              text='Ripik AI APC'
              hoverImg='./images/products/apc.png'
            />
            </Tooltip>
            {/* </ul>
            <ul className='cards__items'> */}
          <Tooltip
              content={(
                <div>
                  <div class="post-container">                
                    {/* <div class="post-thumb"><img src="./images/image1.jpg" /></div> */}
                    <div class="post-content">
                        <h3 class="post-title">Ripik vision</h3>
                        <p>Ripik’s computer vision tool to get a deep insight into black box like operations in cement kiln, blast furnace, steel melt shop amongst others,</p>
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
              src='./images/products/vision2.png'
              text='Ripik vision'
              hoverImg='./images/products/vision.png'
            />
            </Tooltip>
            <Tooltip
              content={(
                <div>
                  
                  <div class="post-container">                
                    {/* <div class="post-thumb"><img src="./images/image1.jpg" /></div> */}
                    <div class="post-content">
                        <h3 class="post-title">Ripik AI for everyone</h3>
                        <p>Hiring and retaining data scientist is an issue?</p>
                        <p>No problem. We are here to solve. Get the ML models without a single line of code via Ripik AI for everyone tool.</p>
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
              src='./images/products/aife2.png'
              text='Ripik AI for everyone'
              hoverImg='./images/products/aife.png'
            />
            </Tooltip>
            </ul>
            
        </div>
      </div>
    </div>
  );
}

export default Products;
