import React, { Component } from 'react';
import './index.css';

class Correct extends Component {

  render() {
    return (
      <div className="Correct">
        <div className="gameboard">{this.props.gameboard}</div>
        <div>Hint: {this.props.currentAnswer.hint}</div>
        <button onClick={this.props.clickFunc}>Reveal Answer</button>
      </div>
    );
  }
}

export default Correct;
