import React, { Component } from 'react';
import './index.css';
import Guess from './Guess.js';
import Gameboard from './Gameboard.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>Hangman</div>
        <div><button>New Game</button></div>
        <div className="graphic"></div>
        <Guess />
        <Gameboard />
      </div>
    );
  }
}

export default App;
