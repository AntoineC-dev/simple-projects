import { Button, ButtonGroup } from "@chakra-ui/react";
import { useFilter, useSetFilter } from "../store";

export const FiltersBar = () => {
  const filter = useFilter();
  const setFilter = useSetFilter();
  return (
    <ButtonGroup variant="outline" size="sm">
      <Button isActive={filter === "all"} onClick={() => setFilter("all")}>
        All
      </Button>
      <Button isActive={filter === "todo"} onClick={() => setFilter("todo")}>
        Todo
      </Button>
      <Button isActive={filter === "done"} onClick={() => setFilter("done")}>
        Done
      </Button>
    </ButtonGroup>
  );
};
