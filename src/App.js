import React, { Component } from 'react';
import './App.css';
import {HashRouter, Route} from 'react-router-dom';
import login from './components/Login/Login.js';


class App extends Component {
  render() {
    return (
      <HashRouter>
        <Route path='/' component={login} exact />
      </HashRouter>
    );
  }
}


export default App;
