import React, { Component } from 'react'
import hero from '../../images/hero.png'

const heroImage = {
  width: "100%"
}

class Hero extends Component {


  render() {
    return (
      <div className="hero">
        <img src={hero} style={heroImage} alt="hero"/>
        
      </div>
    )
  }
}



export default Hero;
