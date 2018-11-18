import React, { Component } from 'react'
import github from '../assets/images/github-sign.svg'
import linkedin from '../assets/images/linkedin-sign.svg'
import '../styles/Links.css';

class Links extends Component {
	render () {
		return (
      <div className="Links">
        <a href="https://github.com/nimeshkeswani">
          <img className="Link-icon-image" src={github} alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/nimeshkeswani/">
          <img className="Link-icon-image" src={linkedin} alt="linkedin" />
        </a>
      </div>
		)
	}
}

export default Links
