import React, { Component } from 'react';
import github from '../assets/images/github-sign.svg'
import linkedin from '../assets/images/linkedin-sign.svg'

class Home extends Component {
	render () {
		return (
			<div>
			<header className="App-header">
				Nimesh Keswani
        	</header>
        	<div className="App-body">
        		<a href="https://github.com/nimeshkeswani">
        			<img className="App-icon-image" src={github} alt="github" />
        		</a>
        		<a href="https://www.linkedin.com/in/nimeshkeswani/">
        			<img className="App-icon-image" src={linkedin} alt="linkedin" />
        		</a>
        	</div>
        	</div>
		)
	}
}

export default Home