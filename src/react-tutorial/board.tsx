/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Square } from './square';

interface BoardState {
  squares: (number | null)[];
}
export class Board extends React.Component<{}, BoardState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  renderSquare = (i: number) => {
    const { squares } = this.state;
    return (
      <Square
        value={squares[i]}
        squareClickEvent={(squareNr) => {
          if (squareNr === null)
            this.setState((state) => {
              const newSquares = state.squares;
              newSquares[i] = 8;
              return { squares: newSquares };
            });
        }}
      />
    );
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