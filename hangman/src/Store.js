import { createStore } from 'redux';

let answer = {
  answer: 'TEST ANSWER',
  hint: 'Test answer'
};

let gameboard = answer.answer.replace(/[\w]/g, '_');

const initialState = {
  currentAnswer: answer,
  gameboard: gameboard,
  letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
};

const reducer = (state = initialState, action) => {
  return state;
};

const store = createStore(reducer);

module.exports = {store: store};
