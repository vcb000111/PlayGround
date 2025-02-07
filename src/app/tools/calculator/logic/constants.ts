export const keyTypes = {
  MAIN: "MAIN_FUNC",
  BASIC: "BASIC_FUNC",
  MEMORY: "MEMORY_FUNC",
  MATH: "MATH_FUNC",
  NUMBER: "NUMBER_FUNC"
} as const;

export type KeyType = typeof keyTypes[keyof typeof keyTypes];

export interface CalculatorState {
  open: boolean;
  currentEntry: number;
  nextEntry: number | null;
  operation: string | null;
  float: boolean;
  memory: number | null;
  automaticTurnOff: NodeJS.Timeout | null;
  lastAction: string | null;
  lastCalculation: {
    operation: string | null;
    nextEntry: number | null;
  };
  currentValue: string;
  previousValue: string | null;
  operator: string | null;
  newNumber: boolean;
}

export const initialState: CalculatorState = {
  open: true,
  currentEntry: 0,
  nextEntry: null,
  operation: null,
  float: false,
  memory: null,
  automaticTurnOff: null,
  lastAction: null,
  lastCalculation: {
    operation: null,
    nextEntry: null
  },
  currentValue: '0',
  previousValue: null,
  operator: null,
  newNumber: true
};

export interface CalculatorKey {
  type: KeyType;
  value: string;
  label?: string;
  extraClass?: string;
} 