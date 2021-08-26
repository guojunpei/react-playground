/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Square } from './square';

interface BoardProps{
  squareClickEvent: (e: number) => void;
  squares: ( `X` | `O` )[];
}
export class Board extends React.Component<BoardProps, {}> {
  renderSquare = (i: number) => {
    return (
      <Square
        value={this.props.squares[i]}
        squareClickEvent={() => this.props.squareClickEvent(i)}
      />
    );
  };

  render() {
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

