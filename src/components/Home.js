import React, { Component } from 'react';
import test from './test.png'

class Home extends Component {
	render () {
		return (
			<div>
			<header className="App-header">
				Nimesh Keswani
        	</header>
        	<div className="App-body">
        		<a href="https://github.com/nimeshkeswani">
        			<img className="App-icon-image" src="https://image.flaticon.com/icons/svg/25/25657.svg" alt="github" />
        		</a>
        		<a href="https://www.linkedin.com/in/nimeshkeswani/">
        			<img className="App-icon-image" src="https://image.flaticon.com/icons/svg/25/25320.svg" alt="linkedin" />
        		</a>
        	</div>
        	</div>
		)
	}
}

export default Home