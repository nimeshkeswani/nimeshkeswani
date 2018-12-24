import React, { Component } from 'react'
import '../styles/Projects.css'
import Project from './Project'

class Projects extends Component {
	render () {
		return (
			<div className='Projects'>
        <Project
          title='Would You Rather?'
          description='A Would You Rather App using React & Redux'
          githubLink='https://github.com/nimeshkeswani/would-you-rather'
          externalLink='https://nimeshkeswani.github.io/would-you-rather' />
        <Project
          title='My Reads'
          description='A Book Tracking App using React'
          githubLink='https://github.com/nimeshkeswani/my-reads'
          externalLink='https://nimeshkeswani.github.io/my-reads' />
      </div>
		)
	}
}

export default Projects
