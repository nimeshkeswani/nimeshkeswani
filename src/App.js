import React, { Component, Fragment } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Links from './components/Links'
import Projects from './components/Projects'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Router basename={process.env.PUBLIC_URL}>
          <Fragment>
            <Navbar>
              <Navbar.Header>
                <Navbar.Brand>
                  <Link to='/home'>Nimesh Keswani</Link>
                </Navbar.Brand>
              </Navbar.Header>
              <Nav>
                <LinkContainer to='/about'>
                  <NavItem eventKey={2}>About</NavItem>
                </LinkContainer>
                <LinkContainer to='/projects'>
                  <NavItem eventKey={3}>Projects</NavItem>
                </LinkContainer>
                <LinkContainer to='/contact'>
                  <NavItem eventKey={4}>Contact</NavItem>
                </LinkContainer>
              </Nav>
            </Navbar>
            <div className='Home-body'>
              <Route exact path='/home' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/projects' component={Projects} />
              <Route exact path='/contact' component={Contact} />
            </div>
            <footer className='Home-footer'>
              <Links />
              Nimesh Keswani &copy; 2018
            </footer>
          </Fragment>
        </Router>
      </div>
    )
  }
}

export default App
