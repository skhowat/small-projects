import React, { Component } from 'react';
import './index.css';
import Incorrect from './Incorrect.js';
import Correct from './Correct.js';
import Solutions from './Solutions.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      currentAnswer: '',
      gameboard: [],
      guesses: 6,
      picIndex: 0,
      message: 'Click a letter to make a guess',
      rightGuess: [],
      wrongGuess: []
    }
  }

  componentDidMount() {
    // Sets the state with a new gameboard and solution.
    const currentAnswer = Solutions[Math.floor(Math.random() * Solutions.length)];
    this.setState({
      currentAnswer: currentAnswer,
      gameboard: currentAnswer.answer.replace(/[\w]/g, '_').split("")
    });
  }

  newGame() {
    // Resets the state with a new gameboard and solution.
    const currentAnswer = Solutions[Math.floor(Math.random() * Solutions.length)];
    this.setState({
      letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      currentAnswer: currentAnswer,
      gameboard: currentAnswer.answer.replace(/[\w]/g, '_').split(""),
      guesses: 6,
      picIndex: 0,
      message: 'Click a letter to make a guess',
      rightGuess: [],
      wrongGuess: []
    });
  }

  answerClick(evt) {
    // If player has no guesses left, take no action.
    if (this.state.guesses === 0)
      { return; }
    // If the selected letter has been previously selected, take no action.
    if (this.state.rightGuess.indexOf(evt.target.id) > -1 || this.state.wrongGuess.indexOf(evt.target.id) > -1)
        { return; }
    // Check to see if the selected letter is included in the solution.
    else if (this.state.currentAnswer.answer.indexOf(evt.target.id) > -1) {
    // Copy the current gameboard.
      let newboard = this.state.gameboard;
    // Looping through the correct solution, if the letter is found at the current index, add it to the copied gameboard at the corresponding index.
      for (let i=0; i<this.state.currentAnswer.answer.length; i++) {
        if (this.state.currentAnswer.answer[i] === evt.target.id) {
          newboard[i] = evt.target.id;
        }
      }
      // Copy the rightGuess array from the current state and add the selected letter to it.
      let newRight = this.state.rightGuess.slice();
      newRight.push(evt.target.id);
      // Set the state with the new gameboard, message, and rightGuess array.
      this.setState({gameboard: newboard, message: 'Correct!', rightGuess: newRight});
      // Check to see if the player has won the game.
      this.checkWin();
    }
    // If the selected letter is not included in the solution, check to see if this is the last available guess.
    else if (this.state.guesses === 1) {
      // Copy the wrongGuess array from the current state and add the selected letter to it.
      let newWrong = this.state.wrongGuess.slice();
      newWrong.push(evt.target.id);
      // Set the state: decrement the guesses counter, increment the picIndex counter, update the message, and update the wrongGuess array.
      this.setState({ guesses: this.state.guesses-1, picIndex: this.state.picIndex+1, message: 'No more guesses. Click "New Game" to play again!', wrongGuess: newWrong});
    }
    else {
      // The selected letter is not included in the solution, and the game is not yet over. Copy the wrongGuess array from the current state and add the selected letter to it.
      let newWrong = this.state.wrongGuess.slice();
      newWrong.push(evt.target.id);
      // Set the state with updated wrongGuess array, decrement guess counter, increment picIndex counter, update the message.
      this.setState({ guesses: this.state.guesses-1, picIndex: this.state.picIndex+1, message: 'Try again!', wrongGuess: newWrong });
    }
  }

  checkWin() {
    // If there are no blanks left on the gameboard, update the message and set the guess counter to 0 to end the game.
    if (this.state.gameboard.indexOf('_') === -1) {
      this.setState({message: 'You win!', guesses: 0});
    }
  }

  revealAnswer() {
    // Set the current gameboard to the current solution, update the message, and set the guess counter to 0 to end the game.
    this.setState({
      gameboard: this.state.currentAnswer.answer,
      message: 'Click "New Game" to play again!',
      guesses: 0
    });
  }

  render() {
    // Map over array of letters to create list items.
    let answers = this.state.letters.map((x) => {
      // If the letter is also included in the current rightGuess array in state, add the "right" className.
       if (this.state.rightGuess.indexOf(x) > -1) {
         return <li className="answers right" key={x} id={x} onClick={(evt) => this.answerClick(evt)}>{x}</li>
       }
       // If the letter is also included in the current wrongGuess array in state, add the "wrong" className.
       else if (this.state.wrongGuess.indexOf(x) > -1) {
         return <li className="answers wrong" key={x} id={x} onClick={(evt) => this.answerClick(evt)}>{x}</li>
       }
       else {
         return <li className="answers" key={x} id={x} onClick={(evt) => this.answerClick(evt)}>{x}</li>
       }
     });


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
