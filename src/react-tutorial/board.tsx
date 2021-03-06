import React from 'react';
import { Square } from './square';

interface BoardProps {
  squareClickEvent: (e: number) => void;
  squares: (`X` | `O`)[];
}
export class Board extends React.Component<BoardProps, {}> {
  renderSquare = (i: number) => {
    const { squares } = this.props;
    const { squareClickEvent } = this.props;
    return (
      <Square value={squares[i]} squareClickEvent={() => squareClickEvent(i)} />
    );
  };

  render() {
    return (
      <div>
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
