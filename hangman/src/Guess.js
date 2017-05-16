import React, { Component } from 'react';
import './index.css';

class Guess extends Component {

  onKeyDown(evt) {
    if (evt.target.value.length > 0) {
      evt.target.value = evt.target.value.substr(0, 0);
    }
  }

  render() {
    return (
      <div className="Guess">
        <div>Message</div>
        <input onKeyDown={(evt) => this.onKeyDown(evt)}></input><button>Guess</button>
        <div>Correct</div>
        <div>Incorrect</div>
        <div>Guesses Left</div>
      </div>
    );
  }
}

export default Guess;
