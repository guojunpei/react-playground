/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Board } from './board';
import './game.scss';
import { findWinner } from './rules';
interface GameState {
  //squares: ( `X` | `O` )[];
  xIsNext: boolean;
  history: {}[];
}

export class Game extends React.Component<{}, GameState> {
  constructor(props:( `X` | `O` )[]){
    super(props)
    this.state = {
      history: [{
        square: Array(9).fill(null),
      }],
      xIsNext: true,
    };
  }

  handleClick(i:number){
    const history = this.state.history;
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if(findWinner(squares) || squares[i]){
      return;
    }
    squares[i] = this.state.xIsNext ? `X` : `O`;
    this.setState({
      history: history.concat([{
        squares:squares
      }]),
      xIsNext: !this.state.xIsNext,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = findWinner(current.squares);

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
