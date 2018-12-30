import React, { Component } from 'react'
import nimeshKeswani from '../assets/images/nimesh-keswani.jpg'
import '../styles/Home.css'

class Home extends Component {
  render () {
    return (
      <div className="home-main">
        <img className='picture' src={nimeshKeswani} alt='nimesh-keswani' />
        <div className='details'>
          <p>Nimesh Keswani</p>
          <hr />
          <p>Software Engineer in San Francisco Bay Area, CA</p>
        </div>
      </div>
    )
  }
}

export default Home
