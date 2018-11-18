import React, { Component, Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
	<Router basename={process.env.PUBLIC_URL}>
        <Fragment>
        <header className="App-header">
	Nimesh Keswani
        </header>
	</Fragment>
	</Router>
      </div>
    );
  }
}

export default App;
