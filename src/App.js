import React, { Component } from 'react';
import './App.css';
import {HashRouter, Route} from 'react-router-dom';
import login from './components/Login/Login.js';
import header from './components/Header/Header.js';//for testing



class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route path='/' component={login} exact />
          <Route path='/header' component={header} />
        </div>
      </HashRouter>
    );
  }
}


export default App;
