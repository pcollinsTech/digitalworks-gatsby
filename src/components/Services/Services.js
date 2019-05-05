import React, { Component } from 'react'

import services from '../../images/headings/services.png'
import content from '../../images/services/content.png'
import seo from '../../images/services/seo.png'
import social from '../../images/services/social.png'
import workshops from '../../images/services/workshops.png'

const servicesText = {
  textAlign: 'center',
  fontFamily: 'Sans-serif'
}

const servicesHeader = {
  contentAlign: 'center',
  maxWidth: '300px',
  height:'80px',
}
export default () => {
  return (
    <div className="container  mt-5">
      <div className="row" id="services">
        <img className="mx-auto mt-5" src={services} style={servicesHeader} />
        <div className="container mt-5">
          <div className="row">

            <div className="col-md-3 servicesText">
              <img src={social} />
              <ul>
                <li>Community Management</li>
                <li>Content Creation</li>
                <li>Advertising Management</li>
                <li>Account Management</li>
                <li>Influencer Management</li>
              </ul>
            </div>
            <div className="col-md-3">
              <img src={seo} />
              <ul>
                <li>Paid Search Advertising</li>
                <li>Re-Marketing</li>
                <li>PPC Audit</li>
                <li>SEO Audit</li>
                <li>Keyword Research</li>
              </ul>
            </div>
            <div className="col-md-3">
              <img src={content} />
              <ul>
                <li>Content Strategy</li>
                <li>Content Creation</li>
                <li>Editorial Planning</li>
                <li>Copywriting</li>
                <li>Visual Content Creation</li>
              </ul>
            </div>
            <div className="col-md-3">
              <img src={workshops} />
              <ul>
                <li>One-to-one Sessions</li>
                <li>Employee Advocacy Training</li>
                <li>Group Sessions</li>
                <li>Content Creation & Planning</li>
                <li>Social Media Advertising</li>
              </ul>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

