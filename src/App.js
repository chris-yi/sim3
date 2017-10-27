import React, { Component } from 'react';
import './App.css';
import {HashRouter, Route} from 'react-router-dom';
import login from './components/Login/Login.js';
import header from './components/Header/Header.js';//for testing
import dashboard from './components/Dashboard/Dashboard.js';
import profile from './components/Profile/Profile.js';



class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route path='/' component={login} exact />
          <Route path='/header' component={header} />
          <Route path='/dashboard' component={dashboard} />
          <Route path='/profile' component={profile} />
        </div>
      </HashRouter>
    );
  }
}


export default App;
