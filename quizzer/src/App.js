import React, { Component } from 'react';
import './index.css';
import Cards from './Card.js';
import $ from 'jquery';

class App extends Component {
  constructor() {
    super();
    this.state = {
      trivia: [{
        question: 'test',
        correctAnswer: 'test',
        incorrectAnswers: []
      }]
    }

  }



  componentDidMount() {
    $.ajax ({
      url: 'https://opentdb.com/api.php?amount=10'
    })
    .done((data) => {
      console.log('data?', data);

      let results = data.results;
      let info = results.map((x) => (
        {
        question: x.question,
        correctAnswer: x.correct_answer,
        incorrectAnswers: x.incorrect_answers,
        category: x.category
      }));
      // console.log(info);




      this.setState({
        trivia: info
      });
      // console.log(this.state);
    });
  }

  render() {

    return (
      <div className="App">
        <h1>Test</h1>
        <Cards question={this.state.trivia[0].question} correct={this.state.trivia[0].correctAnswer} incorrect={this.state.trivia[0].incorrectAnswers}/>
      </div>
    );
  }
}

export default App;
