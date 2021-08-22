/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { findWinner } from './rules';
import { Square } from './square';

interface BoardState {
  squares: ( `X` | `O` )[];
  xIsNext: boolean;
}
export class Board extends React.Component<{}, BoardState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i: number){
    const squares =this.state.squares.slice();
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
    const winner = findWinner(this.state.squares);

    let status;

    if(winner){
      status = `Winner: `+ winner;
    }else{
      status =`Next player: `+(this.state.xIsNext ? `X` : `O`);
    }

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

