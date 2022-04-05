import React, { Component } from 'react';
import { CalculatorBtnProps } from './types/calculator-btn-props';

// eslint-disable-next-line react/prefer-stateless-function
export class CalculatorBtn extends Component<CalculatorBtnProps, {}> {
  render() {
    const { name, classNames, clickEvent } = this.props;
    //if(CalculatorOperationType){"operation-active"}else{{classNames}}

    return (
      <button
        className={classNames}
        //className={if(CalculatorOperationType){"operation-active"}else{{classNames}} }
        type="button"
        onClick={() => clickEvent(name)}
      >
        {name}
      </button>
    );
  }
}
