import React, { Component } from 'react';
import './index.css';
import Cards from './Card.js';
import $ from 'jquery';

class App extends Component {
  constructor() {
    super();
    this.state = {
      trivia: [{question: 'test', correct_answer: 'test'}]
    }

  }



  componentDidMount() {
    $.ajax ({
      url: 'https://opentdb.com/api.php?amount=10'
    })
    .done((data) => {
      console.log('data?', data);
      this.setState({
        trivia: data.results
      });
    });
  }

  render() {

    return (
      <div className="App">
        <h1>Test</h1>
        <Cards question={this.state.trivia[0].question} answer={this.state.trivia[0].correct_answer}/>
      </div>
    );
  }
}

export default App;
