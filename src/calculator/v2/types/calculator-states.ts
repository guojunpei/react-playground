import { CalculatorOperationType } from './calculator-btn-type';

export interface CalculatorStates {
  x: string | undefined;
  y: string | undefined;
  operation: CalculatorOperationType | undefined;
  result: number;
}
