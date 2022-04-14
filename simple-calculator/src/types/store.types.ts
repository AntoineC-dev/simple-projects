export type Operations = "÷" | "x" | "+" | "-";
export type Themes = "dark" | "light";

export interface StoreState {
  theme: Themes;
  toggleTheme: () => void;
  output: {
    previousOperand: string | null;
    currentOperand: string | null;
    operation: Operations | null;
    overwrite: boolean;
  };
  addDigit: (digit: string) => void;
  clear: () => void;
  setOperation: (operation: Operations) => void;
  setResult: () => void;
  removeDigit: () => void;
}
