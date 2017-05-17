import React, { Component } from 'react';
import './index.css';
import Incorrect from './Incorrect.js';
import Correct from './Correct.js';
import Solutions from './Solutions.js';

const currentAnswer = Solutions[Math.floor(Math.random() * Solutions.length)];


class App extends Component {
  constructor() {
    super();
    this.state = {
      letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      currentAnswer: currentAnswer,
      gameboard: currentAnswer.answer.replace(/[\w]/g, '_').split(""),
      guesses: 6,
      picIndex: 0,
      message: 'Click a letter to make a guess'
    }
  }

  newGame() {
    window.location.reload();
  }

  answerClick(evt) {
    if (this.state.guesses === 0)
      { return; }
    if (evt.target.className === "answers right" || evt.target.className === "answers wrong")
      { return; }
    else if (this.state.currentAnswer.answer.indexOf(evt.target.id) > -1) {
      let newboard = this.state.gameboard;
      for (let i=0; i<this.state.currentAnswer.answer.length; i++) {
        if (this.state.currentAnswer.answer[i] === evt.target.id) {
          newboard[i] = evt.target.id;
        }
      }
      this.setState({gameboard: newboard, message: 'Correct!'});
      evt.target.className = "answers right";
      this.checkWin();
    }
    else if (this.state.guesses === 1) {
      this.setState({ guesses: this.state.guesses-1, picIndex: this.state.picIndex+1, message: 'No more guesses. Click "New Game" to play again!'});
      evt.target.className = "answers wrong";
    }
    else {
      this.setState({ guesses: this.state.guesses-1, picIndex: this.state.picIndex+1, message: 'Try again!' });
      evt.target.className = "answers wrong";
    }
  }

  checkWin() {
    if (this.state.gameboard.indexOf('_') === -1) {
      this.setState({message: 'You win!', guesses: 0});
    }
  }

  revealAnswer() {
    this.setState({
      gameboard: this.state.currentAnswer.answer,
      message: 'Click "New Game" to play again!',
      guesses: 0
    });
  }

  render() {

    let answers = this.state.letters.map((x) => <li className="answers" key={x} id={x} onClick={(evt) => this.answerClick(evt)}>{x}</li>)

    return (
      <div className="App">
        <h1>Hangman</h1>
        <h2>{this.state.message}</h2>
        <ul className="answers-ul">{answers}</ul>
        <div><button onClick={() => this.newGame()}>New Game</button></div>
        <Incorrect guesses={this.state.guesses} picIndex={this.state.picIndex}/>
        <Correct currentAnswer={this.state.currentAnswer} gameboard={this.state.gameboard} clickFunc={() => this.revealAnswer()}/>
      </div>
    );
  }
}

export default App;
