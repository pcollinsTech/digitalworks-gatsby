import React, { Component } from 'react'
import client from '../../images/headings/our-clients.png'


const clientHeader = {
  contentAlign: 'center',
  maxWidth: '300px',
  height: '80px',
}
class Clients extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row" id="about">

          <img className="mx-auto" src={client} style={clientHeader} alt="client-heading"/>
          <div className="container">
            {
              
            }
          </div>

        </div>

      </div>
    )
  }
}

export default Clients
