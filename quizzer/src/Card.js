import React, { Component } from 'react';
import './index.css';

class Card extends Component {
  render() {

    console.log(this.props);

    function shuffle(arr) {
      let i = arr.length;
      let temp;
      let rand;

      while(i) {
        rand = Math.floor(Math.random() * i);
        i -= 1;
        temp = arr[i];
        arr[i] = arr[rand];
        arr[rand] = temp;
      }

      return arr;
    }

    let answer = this.props.correct;
    let options = this.props.incorrect.slice();
    options.push(answer);
    console.log(options);
    let shuffled = shuffle(options);
    console.log('shuffled?', shuffled);

    let choices = shuffled.map((x, i) => <li key={i}>{x}</li>);

    let question = this.props.question;
    question = question.replace(/&quot;/g, '"');
    question = question.replace(/&#039;/g, "'");
    question = question.replace(/&ldquo;/g, '"');
    console.log(question);



    return (
      <div className="card">
        <div className="front">
          {question}
          <ul>
            {choices}
          </ul>
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
