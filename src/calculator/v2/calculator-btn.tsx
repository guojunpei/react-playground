import React, { Component } from 'react';
import { CalculatorBtnProps } from './types/calculator-btn-props';

// eslint-disable-next-line react/prefer-stateless-function
export class CalculatorBtn extends Component<CalculatorBtnProps, {}> {
  render() {
    const { name, classNames, clickEvent } = this.props;
    return (
      <button
        className={classNames}
        type="button"
        onClick={() => clickEvent(name)}
      >
        {name}
      </button>
    );
  }
}
