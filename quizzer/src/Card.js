import React, { Component } from 'react';
import './index.css';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="front">
          {this.props.question}
        </div>
        <div className="back">
          {this.props.answer}
        </div>
      </div>
    );
  }
}

class Cards extends Component {
  render() {


    return (
      <div className="quiz">
        <Card question={this.props.question} answer={this.props.answer} />
      </div>
    );
  }
}

export default Cards;
