import { CalculatorState } from './constants';

export const initialState: CalculatorState = {
    currentValue: '0',
    previousValue: null,
    operator: null,
    newNumber: true
}; 