import { calBtns, calOperations, calSettings } from './constants';
import {
  CalculatorBtnNameType,
  CalculatorBtnType,
  CalculatorOperationType,
} from './types/calculator-btn-type';

export const isNameNumber = (name: CalculatorBtnNameType) =>
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].some((n) => n.toString() === name);

const getClassnames = (name: CalculatorBtnNameType) => {
  if (calSettings.some((s) => s === name)) {
    return 'setting';
  }

  if (calOperations.some((o) => o === name) || name === '=') {
    return 'operation';
  }

  if (name === '0') {
    return 'value zero';
  }

  return 'value';
};

export const getCalculatorBtns = (): CalculatorBtnType[] =>
  [...calSettings, ...calBtns].map((s) => ({
    name: s,
    classNames: getClassnames(s),
  }));

export const compute = (
  x: number,
  operation: CalculatorOperationType,
  y: number,
) => {
  switch (operation) {
    case '-':
      return x - y;
    case 'x':
      return x * y;
    case '÷':
      return x / y;
    default:
      return x + y;
  }
};
