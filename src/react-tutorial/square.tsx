/* eslint-disable react/prefer-stateless-function */
import React from 'react';

export interface SquareProps {
  value: number;
}
export class Square extends React.Component<SquareProps, {}> {
  render() {
    const { value } = this.props;
    return (
      <button type="button" className="square">
        {value}
      </button>
    );
  }
}
