import {
  CalculatorBtnNameType,
  CalculatorBtnType,
  CalculatorOperationType,
} from './calculator-btn-type';

export interface ClickEventType {
  clickEvent: (name: CalculatorBtnNameType) => void;
}

export type CalculatorBtnProps = CalculatorBtnType & ClickEventType;
