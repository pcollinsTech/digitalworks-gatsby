import React, { Component } from 'react'

import whyUs from '../../images/headings/why-us.png'
import affordable from '../../images/whyUs/affordable.png'
import flexible from '../../images/whyUs/flexible.png'
import scalable from '../../images/whyUs/scalable.png'
import specialised from '../../images/whyUs/specialised.png'

const whyUsText = {
  textAlign: 'center',
  fontFamily: 'Sans-serif'
}

const whyUsHeader = {
  contentAlign: 'center',
  maxWidth: '300px',
  height:'80px',
}
export default () => {
  return (
    <div className="container mt-5">
      <div className="row" id="whyUs">
        <img className="mx-auto mt-5" src={whyUs} style={whyUsHeader} />
        <div className="container mt-5">
          <div className="row">
          
            <div className="col-md-3" style={whyUsText}>
              <img src={specialised} />
              <p>
                From the very beginning, social media has been at the core of everything we do. 
                From content marketing to brand development, you can bet we’ve done it.
              </p>
            </div>
            <div className="col-md-3">
              <img src={flexible} />
                <p>
                  Digital works agency had experience across multiple industries,including food, drink, 
                  lifestyle & finance. This means we know how to adapt our process to fit your business needs.
              </p>
            </div>
            <div className="col-md-3">
              <img src={affordable} />
                <p>
                  We work with you to ensure our prices meet your requirements as best as possible.
                  We deliver results which give you the best return on your investment.
              </p>
            </div>
            <div className="col-md-3">
              <img src={scalable} />
                <p>
                  As your business needs grow, so does our commitment to you. Your investment in us 
                  means we’re with you throughout every stage of your business journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

