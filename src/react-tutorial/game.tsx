import React from 'react';
import { Board } from './board';
import './game.scss';
import { findWinner } from './rules';

export interface GameProps {
  stepNumber: number;
  xIsNext: boolean;
  history: { squares: (`X` | `O`)[] }[];
}

export class Game extends React.Component<{}, GameProps> {
  constructor(props: GameProps) {
    super(props);
    this.state = {
      stepNumber: 0,
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      xIsNext: true,
    };
  }

  handleClick(i: number) {
    const { history, xIsNext, stepNumber } = this.state;
    const historys = history.slice(0, stepNumber + 1);
    const current = historys[historys.length - 1];
    const squares = current.squares.slice();
    if (findWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? `X` : `O`;
    this.setState({
      history: history.concat([
        {
          squares,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !xIsNext,
    });
  }

  jumpTo(step: number) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  render() {
    const { history, stepNumber, xIsNext } = this.state;
    const current = history[stepNumber];
    const winner = findWinner(current.squares);
    const moves = history.map((step, move) => {
      const desc = move ? `Go to move #${move}` : 'Go to game start';
      return (
        <li key={step.squares[move]}>
          <button type="button" onClick={() => this.jumpTo(move)}>
            {desc}
          </button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${xIsNext ? 'X' : 'O'}`;
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            squareClickEvent={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}
