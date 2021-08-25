/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { findWinner } from './rules';
import { Square } from './square';

export interface BoardState {
  squares: ( `X` | `O` )[];
  xIsNext: boolean;
}
export class Board extends React.Component<{}, BoardState> {
  handleClick(i: number){
    const squares =this.state.squares.slice();
    
    if(findWinner(squares) || squares[i]){
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  renderSquare = (i: number) => {
    const { squares } = this.state;
    return (
      <Square
        value={squares[i]}
        squareClickEvent={(squareNr) => {
          if (squareNr === null)
            this.handleClick(i)
        }}
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

