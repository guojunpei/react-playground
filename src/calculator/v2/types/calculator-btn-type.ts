import { calBtns, calOperations, calSettings } from '../constants';

export type CalculatorOperationType = typeof calOperations[number];
export type CalculatorBtnNameType =
  | typeof calSettings[number]
  | typeof calBtns[number];

export interface CalculatorBtnType {
  name: CalculatorBtnNameType;
  classNames?: string;
}
