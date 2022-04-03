import React from 'react';
import { CalculatorInput } from './calculator-input';
import { CalculatorOutput } from './calculator-output';
import { CalculatorBtnNameType } from './types/calculator-btn-type';
import { CalculatorStates } from './types/calculator-states';
import './calculator.scss';
import { compute, isNameNumber } from './utils';
import { calOperations } from './constants';

// eslint-disable-next-line react/prefer-stateless-function
export class Calculator extends React.Component<{}, CalculatorStates> {
  constructor(props: {}) {
    super(props);
    this.state = {
      x: undefined,
      y: undefined,
      operation: undefined,
      result: 0,
    };
  }

  render() {
    const { x, y, operation, result } = this.state;
    // improve this
    const isClear = (name: CalculatorBtnNameType) =>
      ['AC', '+/-', '%'].some((c) => c === name);

    const clearState = () => {
      this.setState(() => ({
        x: undefined,
        y: undefined,
        operation: undefined,
        result: 0,
      }));
    };

    const btnClickEventHandler = (name: CalculatorBtnNameType) => {
      //清屏
      if (isClear(name)) {
        clearState();
        return;
      }

      //没有点击计算键，且点击的是数字：数字存到state.x上
      if (!operation && isNameNumber(name)) {
        const value = `${x || ''}${name}`;
        this.setState(() => ({
          x: value,
          result: Number.parseFloat(value),
        }));
        return;
      }

      //点击过计算键，state.x有值，且被点击的是数字：数字存到state.y上
      if (operation && x && isNameNumber(name)) {
        const value = `${y || ''}${name}`;
        this.setState(() => ({
          y: value,
          result: Number.parseFloat(value),
        }));
        return;
      }

      //计算键被点击：
      if (calOperations.some((o) => o === name)) {
        //
        if (!operation) {
          this.setState(() => ({
            operation: name,
          }));
          return;
        }

        //
        if (operation && x && y) {
          const r = compute(
            Number.parseFloat(x),
            operation,
            Number.parseFloat(y),
          );
          this.setState(() => ({
            result: r,
            x: r.toString(),
            y: undefined,
          }));
        }
      }

      // todo: not finished
    };

    return (
      <div className="calculator-v2">
        <CalculatorOutput output={result.toString()} />
        <CalculatorInput clickEvent={btnClickEventHandler} />
      </div>
    );
  }
}
