import React, { Component } from 'react';
import './index.css';

class Card extends Component {
  render() {

    console.log(this.props);

    let answer = this.props.correct;
    let options = this.props.incorrect.slice();
    options.push(answer);
    console.log(options);

    return (
      <div className="card">
        <div className="front">
          {this.props.question}
        </div>
        <div className="back">
          {this.props.correct}
        </div>
      </div>
    );
  }
}

class Cards extends Component {
  render() {


    return (
      <div className="quiz">
        <Card question={this.props.question} correct={this.props.correct} incorrect={this.props.incorrect} />
      </div>
    );
  }
}

export default Cards;
