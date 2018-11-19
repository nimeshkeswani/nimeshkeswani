import React, { Component, Fragment } from 'react'
import Links from './Links'
import '../styles/Home.css'
import Projects from './Projects'

class Home extends Component {
	render () {
		return (
			<Fragment>
				<header className="Home-header">
					<text>Nimesh Keswani</text>
					<Links />
        </header>
				<body className="Home-body">
						<Projects />
				</body>
      </Fragment>
		)
	}
}

export default Home
