import {
  CalculatorBtnNameType,
  CalculatorBtnType,
} from './calculator-btn-type';

export interface ClickEventType {
  clickEvent: (name: CalculatorBtnNameType) => void;
}

export type CalculatorBtnProps = CalculatorBtnType & ClickEventType;
