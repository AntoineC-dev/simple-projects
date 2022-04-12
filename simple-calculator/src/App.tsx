import "./App.css";
import { DigitButton, OperationButton } from "./components";
import { useClear, useOutput, useRemoveDigit, useSetResult } from "./controllers";
import { formatOperand } from "./helpers";

function App() {
  const { currentOperand, operation, previousOperand } = useOutput();
  const clear = useClear();
  const setResult = useSetResult();
  const removeDigit = useRemoveDigit();
  return (
    <div className="calculator">
      <div className="calculator__output">
        <div className="previous-operand">
          {formatOperand(previousOperand)} {operation}
        </div>
        <div className="current-operand">{formatOperand(currentOperand)}</div>
      </div>
      <button type="button" className="span-two" onClick={clear}>
        AC
      </button>
      <button type="button" onClick={removeDigit}>
        DEL
      </button>
      <OperationButton operation="/" />
      <DigitButton digit="1" />
      <DigitButton digit="2" />
      <DigitButton digit="3" />
      <OperationButton operation="*" />
      <DigitButton digit="4" />
      <DigitButton digit="5" />
      <DigitButton digit="6" />
      <OperationButton operation="-" />
      <DigitButton digit="7" />
      <DigitButton digit="8" />
      <DigitButton digit="9" />
      <OperationButton operation="+" />
      <DigitButton digit="." />
      <DigitButton digit="0" />
      <button type="button" className="span-two" onClick={setResult}>
        =
      </button>
    </div>
  );
}

export default App;
