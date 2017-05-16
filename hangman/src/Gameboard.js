import React, { Component } from 'react';
import './index.css';

class Gameboard extends Component {
  render() {
    return (
      <div className="Gameboard">
        <div>Game Board</div>
        <div>Hint: hint</div>
        <button>Get Answer</button>
      </div>
    );
  }
}

export default Gameboard;
