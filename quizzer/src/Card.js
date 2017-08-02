import React, { Component } from 'react';
import './index.css';

class Card extends Component {
  render() {

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
    // console.log(options);
    let shuffled = shuffle(options);
    // console.log('shuffled?', shuffled);

    let choices = shuffled.map((x, i) => <li key={i}>{x}</li>);

    let question = this.props.question;
    question = question.replace(/&quot;/g, '"');
    question = question.replace(/&#039;/g, "'");
    question = question.replace(/&rsquo;/g, "'");
    question = question.replace(/&amp;/g, "&");
    // question = question.replace(/&ldquo;/g, '"');
    // console.log(question);



    return (
      <div className="card">
        <div className="front">
          <h2>{question}</h2>
          <ol>
            {choices}
          </ol>
        </div>
        <div className="back">
          <h2>{this.props.correct}</h2>
        </div>
      </div>
    );
  }
}

class Cards extends Component {
  render() {

    let cards = this.props.trivia.map((x, i) =>
      <li key={i}><Card question={x.question} correct={x.correctAnswer} incorrect={x.incorrectAnswers} /></li>
    );

    return (
      <div className="quiz">
        <ul>
          {cards}
        </ul>
      </div>
    );
  }
}

export default Cards;
