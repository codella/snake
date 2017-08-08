import React, { Component } from 'react';

import Score from '../Score';
import Board from '../Board';

import {
  createInitialBoardState,
  deriveNextBoardState
} from '../../model/snake';

const KEY_TO_DIRECTION = {
  ArrowUp: "up",
  ArrowDown: "down",
  ArrowLeft: 'left',
  ArrowRight: "right"
};

const MATRIX_SIZE = {rows: 30, cols: 30};

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      direction: "right",
      board: createInitialBoardState(MATRIX_SIZE)
    };

    setInterval(this.tickHandler.bind(this), 150);

    this.keyDownHandler = this.keyDownHandler.bind(this);
  }

  tickHandler() {
    const nextBoardState = deriveNextBoardState({
      direction: this.state.direction,
      state: this.state.board,
      matrixSize: MATRIX_SIZE
    });

    const nextScore = nextBoardState.food !== this.state.board.food ?
      this.state.score + 1 :
      this.state.score;

    this.setState({ board: nextBoardState, score: nextScore });
  }

  keyDownHandler(event) {
    const direction = KEY_TO_DIRECTION[event.key];

    if (direction !== undefined) {
      this.setState({ direction: direction });
    }
  }

  componentWillMount() {
    document.addEventListener("keydown", this.keyDownHandler);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyDownHandler);
  }

  render() {
    return (
      <div>
        <Score score={this.state.score} />
        <Board
          snake={this.state.board.snake}
          food={this.state.board.food}
        />
      </div>
    );
  }
}