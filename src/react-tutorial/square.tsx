import React from 'react';

export interface SquareProps {
  value: number | 'X' | 'O';
  squareClickEvent: (e: number | 'X' | 'O' | null) => void;
}
export class Square extends React.Component<SquareProps, {}> {
  render() {
    const { value, squareClickEvent } = this.props;
    return (
      <button
        type="button"
        className="square"
        onClick={() => squareClickEvent(value)}
      >
        {value}
      </button>
    );
  }
}
