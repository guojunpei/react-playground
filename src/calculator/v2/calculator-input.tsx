import React from 'react';
import { CalculatorBtn } from './calculator-btn';
import { ClickEventType } from './types/calculator-btn-props';
import { getCalculatorBtns } from './utils';

// eslint-disable-next-line react/prefer-stateless-function
export class CalculatorInput extends React.Component<ClickEventType, {}> {
  render() {
    const { clickEvent } = this.props;
    return (
      <div className="input">
        {getCalculatorBtns().map((b) => (
          <CalculatorBtn
            key={b.name}
            name={b.name}
            classNames={b.classNames}
            clickEvent={clickEvent}
          />
        ))}
      </div>
    );
  }
}
