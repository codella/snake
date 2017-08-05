import React, { PureComponent } from 'react';

import Board from '../Board';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    
    this.state = {
      snake: [
        { row: 15, col: 12 },
        { row: 15, col: 13 },
        { row: 15, col: 14 },
        { row: 15, col: 15 },
      ],
      food: [ { row: 8, col: 10 } ]
    };

    setInterval(this.tick.bind(this), 200);
  }

  tick() {
    console.debug('tick...');
    
    this.setState();
  }

  render() {
    return <Board snake={this.state.snake} food={this.state.food} />
  }
}