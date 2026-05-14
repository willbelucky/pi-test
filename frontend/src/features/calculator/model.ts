export interface Calculation {
  expression: string;
  result: number;
  timestamp: number;
}

export interface CalculatorState {
  input: string;
  display: string;
  history: Calculation[];
  lastResult?: number;

  setInput(value: string): void;
  setDisplay(value: string): void;
  addToInput(char: string): void;
  clear(): void;
  deleteLast(): void;
  calculate(): void;
  loadFromHistory(index: number): void;
}
