/* eslint-disable react/prefer-stateless-function */
import React from 'react';

export interface SquareProps {
  value: number | null;
  squareClickEvent: (e: number | null) => void;
}
export class Square extends React.Component<SquareProps, {}> {
  render() {
    const { value,squareClickEvent } = this.props;
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