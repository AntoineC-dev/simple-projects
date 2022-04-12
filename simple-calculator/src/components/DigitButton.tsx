import { useAddDigit } from "../controllers";

interface DigitButtonProps {
  digit: string;
}

export const DigitButton = ({ digit }: DigitButtonProps) => {
  const addDigit = useAddDigit();
  const onAddDigit = () => addDigit(digit);
  return (
    <button type="button" onClick={onAddDigit}>
      {digit}
    </button>
  );
};
