import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'

import logo from './logo.svg';
import './App.css';


import MainMenu from './components/MainMenu';
import RoutePage from './pages/RoutePage';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">React mentoring 2018</h1>
            <MainMenu/>
          </header>
          <RoutePage />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
