import React, { Component } from 'react';
import './index.css';

class Incorrect extends Component {

  render() {
    const pics = ['hm1.png', 'hm2.png', 'hm3.png', 'hm4.png', 'hm5.png', 'hm6.png', 'hm7.png'];
    return (
      <div className="Incorrect">
        <div>Guesses Left: {this.props.guesses}</div>
        <div className="graphic"><img src={pics[this.props.picIndex]} alt="hangman"/></div>
      </div>
    );
  }
}

export default Incorrect;
