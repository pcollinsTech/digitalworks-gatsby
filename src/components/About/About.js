import React, { Component } from 'react'

import about from '../../images/headings/about.png'

const aboutText = {
  textAlign: 'center',
  fontFamily: 'Sans-serif'
}

const aboutHeader = {
  contentAlign: 'center',
  maxWidth: '300px',
  height:'80px',
}
export default () => {
  return (
    <div className="container mt-5">
      <div className="row" id="about">

        <img className="mx-auto" src={about} style={aboutHeader} />
        <div className="container">
          <div className="row">
          
            <div style={aboutText}>
              <p>Result-Driven Digital Marketing Agency</p>
              <p>
                We are Digital Works, a creative digital marketing agency working with brands in the U.K. 
                and Ireland specialising in social media, content marketing and online brand development.
              </p>
              <p>
                “Bringing brands to life online” is our company tag line for a reason. We immerse ourselves 
                into your business to ensure that we create and share content online that showcases your business 
                in a personal, trustworthy and memorable manner. 
              </p>
            </div>
          </div>
        
        </div>
      </div>

    </div>
  )
}

