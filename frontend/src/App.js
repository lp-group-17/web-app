/*import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import CardPage from './pages/CardPage';
function App() {
  return (
    <Router >
      <Switch>
        <Route path="/" exact>
          <LoginPage />
        </Route>
        <Route path="/cards" exact>
          <CardPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}
export default App;*/

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Form from './Form.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Form Validation Demo</h2>
        </div>
      </div>
    );
  }
}export default App;