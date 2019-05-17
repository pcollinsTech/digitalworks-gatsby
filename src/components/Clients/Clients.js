import React, { Component } from 'react'
import client from '../../images/headings/our-clients.png'

import clients from './clients.json'

class Clients extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row" id="about">

          <img className="mx-auto home-header" src={client}alt="client-heading"/>
          <div className="container">
            {
              clients.map((client, i) => {
                return (
                  <div key={i}>
                    <img src={client.image} alt={client.name}/>
                  </div>
                )
              })
            }
          </div>

        </div>

      </div>
    )
  }
}

export default Clients
