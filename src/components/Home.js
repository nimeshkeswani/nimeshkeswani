import React, { Component, Fragment } from 'react'
import Links from './Links'
import '../styles/Home.css';

class Home extends Component {
	render () {
		return (
			<Fragment>
				<header className="Home-header">
					<text>Nimesh Keswani</text>
					<Links />
        </header>
				<body className="Home-body">
				</body>
      </Fragment>
		)
	}
}

export default Home
