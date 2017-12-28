import React, { Component } from 'react';
import './App.css';
import Tickers from './components/Tickers.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Currency Ticker</h1>
        </header>
        <Tickers />
      </div>
    );
  }
}

export default App;
