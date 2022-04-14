import create from "zustand";
import { StoreState } from "../types";
import { evaluate } from "../helpers";

const defaultOutput: StoreState["output"] = {
  previousOperand: null,
  currentOperand: null,
  operation: null,
  overwrite: false,
};

export const useStore = create<StoreState>((set) => ({
  theme: "dark",
  toggleTheme: () => set((state) => ({ theme: state.theme === "dark" ? "light" : "dark" })),
  output: defaultOutput,
  clear: () => set({ output: defaultOutput }),
  addDigit: (digit) =>
    set((state) => {
      const { currentOperand, overwrite } = state.output;
      if (overwrite === true && currentOperand !== null) {
        if (digit === ".")
          return { output: { ...state.output, currentOperand: `${currentOperand}${digit}`, overwrite: false } };
        return { output: { ...state.output, currentOperand: digit, overwrite: false } };
      }

      if (digit === "0" && currentOperand === "0") return state;
      if (digit === "." && currentOperand?.includes(".")) return state;
      if (digit === "." && currentOperand === null) return { output: { ...state.output, currentOperand: `0${digit}` } };
      return {
        output: {
          ...state.output,
          currentOperand: currentOperand === "0" && digit !== "." ? digit : `${currentOperand ?? ""}${digit}`,
        },
      };
    }),
  removeDigit: () =>
    set((state) => {
      const { currentOperand, overwrite } = state.output;
      if (overwrite) return { output: { ...state.output, overwrite: false, currentOperand: null } };
      if (currentOperand === null) return state;
      if (currentOperand.length === 1) return { output: { ...state.output, currentOperand: null } };
      return { output: { ...state.output, currentOperand: currentOperand.slice(0, -1) } };
    }),
  setOperation: (operation) =>
    set((state) => {
      const { currentOperand, previousOperand, overwrite } = state.output;
      if (currentOperand === null && previousOperand !== null) return { output: { ...state.output, operation } };
      if (currentOperand === null) return state;
      if (previousOperand !== null)
        return overwrite
          ? {
              output: { previousOperand: evaluate(state.output), operation, currentOperand: null, overwrite: false },
            }
          : {
              output: { ...state.output, previousOperand: evaluate(state.output), operation, currentOperand: null },
            };

      return overwrite
        ? { output: { previousOperand: currentOperand, operation, currentOperand: "0", overwrite: false } }
        : { output: { ...state.output, previousOperand: currentOperand, operation, currentOperand: "0" } };
    }),
  setResult: () =>
    set((state) => {
      const { currentOperand, operation, previousOperand } = state.output;
      if (currentOperand === null || operation === null || previousOperand === null) return state;
      return {
        output: { previousOperand: null, operation: null, currentOperand: evaluate(state.output), overwrite: true },
      };
    }),
}));
