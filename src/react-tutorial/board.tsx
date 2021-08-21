/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Square, SquareProps } from './square';

export class Board extends React.Component {
  constructor(props:SquareProps){
    super(props);
    this.state = {
      squares: Array(9).fill(null)
    }
  }

  renderSquare = (i: number) => {
    return <Square value={this.state.squares[i]} />;
  };

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }


}
