import { StoreState } from "../types";
import { useStore } from "./store.controllers";

// Theme
const themeSelector = (state: StoreState) => state.theme;
const toggleThemeSelector = (state: StoreState) => state.toggleTheme;

export const useTheme = () => useStore(themeSelector);
export const useToggleTheme = () => useStore(toggleThemeSelector);

// Calculator
const outputSelector = (state: StoreState) => state.output;
const clearSelector = (state: StoreState) => state.clear;
const addDigitSelector = (state: StoreState) => state.addDigit;
const removeDigitSelector = (state: StoreState) => state.removeDigit;
const setOperationSelector = (state: StoreState) => state.setOperation;
const setResultSelector = (state: StoreState) => state.setResult;

export const useOutput = () => useStore(outputSelector);
export const useClear = () => useStore(clearSelector);
export const useAddDigit = () => useStore(addDigitSelector);
export const useRemoveDigit = () => useStore(removeDigitSelector);
export const useSetOperation = () => useStore(setOperationSelector);
export const useSetResult = () => useStore(setResultSelector);
