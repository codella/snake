import React, { Component } from 'react';

import Score from '../Score';
import Board from '../Board';
import StartPane from '../StartPane';

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
      started: false,
      score: 0,
      speed: 200,
      direction: "right",
      board: createInitialBoardState(MATRIX_SIZE)
    };

    this.tickHandler = this.tickHandler.bind(this);
    this.keyDownHandler = this.keyDownHandler.bind(this);
  }

  tickHandler() {
    const nextBoardState = deriveNextBoardState({
      direction: this.state.direction,
      state: this.state.board,
      matrixSize: MATRIX_SIZE
    });

    let nextScore = this.state.score;
    let nextSpeed = this.state.speed;
    if (nextBoardState.food !== this.state.board.food) {
      nextScore++;
      nextSpeed = Math.max(nextSpeed - 2, 50);
    }

    this.setState({ board: nextBoardState, score: nextScore, speed: nextSpeed }, () => {
      clearInterval(this.state.tickerId);
      const tickerId = setInterval(this.tickHandler, this.state.speed);
      this.setState({tickerId});
    });
  }

  keyDownHandler(event) {
    if (! this.state.started) {
      this.setState({ started: true }, () => {
        const tickerId = setInterval(this.tickHandler, this.state.speed);
        this.setState({ tickerId });
      });
    } else {
      const direction = KEY_TO_DIRECTION[event.key];

      if (direction !== undefined) {
        this.setState({ direction: direction });
      }
    }
  }

  componentWillMount() {
    document.addEventListener("keydown", this.keyDownHandler);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyDownHandler);
  }

  render() {
    const pane = this.state.started ?
      <Board snake={this.state.board.snake} food={this.state.board.food} /> :
      <StartPane />;

    return (
      <div>
        <Score score={this.state.score} />
        {pane}
      </div>
    );
  }
}