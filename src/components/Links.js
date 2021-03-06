import React, { Component } from 'react'
import github from '../assets/images/github-sign-white.png'
import linkedin from '../assets/images/linkedin-sign-white.png'
import '../styles/Links.css'

class Links extends Component {
	render () {
		return (
      <div className='Links'>
        <a href='https://github.com/nimeshkeswani' target='_blank' rel='noopener noreferrer'>
          <img className='Link-icon-image' src={github} alt='github' />
        </a>
        <a href='https://www.linkedin.com/in/nimeshkeswani/' target='_blank' rel='noopener noreferrer'>
          <img className='Link-icon-image' src={linkedin} alt='linkedin' />
        </a>
      </div>
		)
	}
}

export default Links
