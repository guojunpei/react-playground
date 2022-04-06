import React, { Component } from 'react';
import { CalculatorBtnProps } from './types/calculator-btn-props';
import {CalculatorOperation} from './types/calculator-btn-type'

// eslint-disable-next-line react/prefer-stateless-function
export class CalculatorBtn extends Component<CalculatorBtnProps, {}> {
  render() {
    const { name, classNames,CalculatorOperation, clickEvent } = this.props;
    let isClassName;
    if(CalculatorOperation){isClassName="operation-active"}else{isClassName={classNames}}

    return (
      <button
        className={isClassName}
        //className={classNames}
        type="button"
        onClick={() => clickEvent(name)}
      >
        {name}
      </button>
    );
  }
}
