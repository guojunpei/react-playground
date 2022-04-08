import React from 'react';
import { CalculatorBtn } from './calculator-btn';
import { ClickEventType, OperationType } from './types/calculator-btn-props';
import { getCalculatorBtns } from './utils';

// eslint-disable-next-line react/prefer-stateless-function
export class CalculatorInput extends React.Component<
  ClickEventType & OperationType,
  {}
> {
  render() {
    const { clickEvent, operation } = this.props;
    return (
      <div className="input">
        {getCalculatorBtns().map((b) => (
          <CalculatorBtn
            key={b.name}
            name={b.name}
            classNames={`${b.classNames}${
              operation === b.classNames ? 'operation-active' : ''
            }`}
            clickEvent={clickEvent}
          />
        ))}
      </div>
    );
  }
}
