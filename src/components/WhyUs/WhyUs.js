import React from 'react'

import whyUs from '../../images/headings/why-us.png'
import affordable from '../../images/whyUs/affordable.png'
import flexible from '../../images/whyUs/flexible.png'
import scalable from '../../images/whyUs/scalable.png'
import specialised from '../../images/whyUs/specialised.png'

export default () => {
  return (
    <React.Fragment>

      <div className="container mt-5">
        <div className="row" id="whyUs">
          <img className="mx-auto mt-5 why-us-header" src={whyUs} alt="whyUs-heading"/>
          <div className="container mt-5">
            <div className="row mt-3">
            
              <div className="col-md-3 service-item">
                <img src={specialised} alt="specialised"/>
                <p className="mt-3 why-us-text">
                  From the very beginning, social media has been at the core of everything we do. 
                  From content marketing to brand development, you can bet we’v3 done it.
                </p>
              </div>
              <div className="col-md-3 service-item">
                <img src={flexible} alt="flexible"/>
                  <p className="mt-3 why-us-text">
                    Digital works agency had experience across multiple industries,including food, drink, 
                    lifestyle & finance. This means we know how to adapt our process to fit your business needs.
                </p>
              </div>
              <div className="col-md-3 service-item">
                <img src={affordable} alt="affordable"/>
                  <p className="mt-3 why-us-text">
                    We work with you to ensure our prices meet your requirements as best as possible.
                    We deliver results which give you the best return on your investment.
                </p>
              </div>
              <div className="col-md-3 service-item">
                <img src={scalable} alt="scalable"/>
                  <p className="mt-3 why-us-text">
                    As your business needs grow, so does our commitment to you. Your investment in us 
                    means we’re with you throughout every stage of your business journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .service-item{
          padding: 0 20px;
        }

        .why-us-text {
          text-align: center;
          font-size:1.3rem;
        }
        .why-us-header {
          content-align: center;
          max-width: 300px;
          height: 80px;
        }

      `}</style>
    </React.Fragment>
  )
}

