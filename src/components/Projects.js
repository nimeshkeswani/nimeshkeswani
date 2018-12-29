import React, { Component } from 'react'
import '../styles/Projects.css'
import Project from './Project'

class Projects extends Component {
	render () {
		return (
			<div className='Projects'>
        <div className='ProjectsCategory'>
        <h3>Frontend</h3>
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
        <div className='ProjectsCategory'>
        <h3>Backend</h3>
        <Project
          title='Backend Server'
          description='A Backend Server using Node.js'
          githubLink='https://github.com/nimeshkeswani/nimesh-server' />
        </div>
      </div>
		)
	}
}

export default Projects
