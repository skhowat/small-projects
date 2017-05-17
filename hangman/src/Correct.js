import React, { Component } from 'react';
import './index.css';

class Correct extends Component {

  render() {
    return (
      <div className="Correct">
        <div className="gameboard">{this.props.gameboard}</div>
        <h2>Hint: {this.props.currentAnswer.hint}</h2>
        <button onClick={this.props.clickFunc}>Reveal Answer</button>
      </div>
    );
  }
}

export default Correct;
