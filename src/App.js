import React, { Component, Fragment } from 'react'
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router basename={process.env.PUBLIC_URL}>
          <Fragment>
            <Home />
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
