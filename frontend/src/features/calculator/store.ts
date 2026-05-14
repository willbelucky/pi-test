import { create } from 'zustand';
import { CalculatorState, Calculation } from './model';

const formatNumber = (num: number): string => {
  return num.toFixed(4).replace(/\.?0+$/, '');
};

export const useCalculatorStore = create<CalculatorState>((set, get) => ({
  input: '',
  display: '0',
  history: [],
  lastResult: undefined,

  setInput(value: string) {
    set({ input: value });
    set({ display: value || '0' });
  },

  setDisplay(value: string) {
    set({ display: value });
  },

  addToInput(char: string) {
    const { input, lastResult } = get();
    
    //If this is the first input after calculation
    if (lastResult !== undefined && input === formatNumber(lastResult)) {
      set({ input: char, display: char });
    } else if (lastResult !== undefined && input === '') {
      set({ input: char, display: char });
    } else {
      const newValue = input + char;
      set({ input: newValue, display: newValue });
    }
  },

  clear() {
    set({ 
      input: '', 
      display: '0',
      lastResult: undefined
    });
  },

  deleteLast() {
    const { input } = get();
    if (input.length <= 1) {
      set({ 
        input: '', 
        display: '0',
        lastResult: undefined
      });
    } else {
      const newValue = input.slice(0, -1);
      set({ 
        input: newValue,
        display: newValue
      });
    }
  },

  calculate() {
    const { input, history } = get();
    
    try {
      // sanitize input to prevent code injection
      const sanitizedInput = input.replace(/[^0-9+\-*/.]/g, '');
      
      if (!sanitizedInput) return;

      // eslint-disable-next-line no-new-func
      const result = Function(`"use strict"; return (${sanitizedInput})`)();
      
      const formattedResult = formatNumber(result);
      
      const newCalculation: Calculation = {
        expression: sanitizedInput,
        result: result,
        timestamp: Date.now(),
      };

      set({ 
        input: formattedResult,
        display: formattedResult,
        lastResult: result,
        history: [...history, newCalculation]
      });
    } catch (error) {
      console.error('Calculation error:', error);
      set({ display: 'Error' });
    }
  },

  loadFromHistory(index: number) {
    const { history } = get();
    
    if (index >= 0 && index < history.length) {
      const calculation = history[index];
      set({ 
        input: formatNumber(calculation.result),
        display: formatNumber(calculation.result),
        lastResult: calculation.result
      });
    }
  },
}));
