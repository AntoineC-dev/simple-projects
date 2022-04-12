import { useSetOperation } from "../controllers";
import { Operations } from "../types";

interface OperantionButtonProps {
  operation: Operations;
}

export const OperationButton = ({ operation }: OperantionButtonProps) => {
  const setOperation = useSetOperation();
  const onSetOperation = () => setOperation(operation);
  return (
    <button type="button" onClick={onSetOperation}>
      {operation}
    </button>
  );
};
