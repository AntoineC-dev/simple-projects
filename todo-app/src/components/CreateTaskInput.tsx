import * as React from "react";
import { IconButton, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useCreateTask } from "../store";
import { AddIcon } from "@chakra-ui/icons";

export const CreateTaskInput = () => {
  const [titleController, setTitleController] = React.useState<string>("");
  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTitleController(e.target.value);
  const createTask = useCreateTask();
  const onCreateTask = () => {
    const title = titleController.trim();
    if (title.length !== 0) createTask(title);
    setTitleController("");
  };
  const onEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => e.key === "Enter" && onCreateTask();
  return (
    <InputGroup>
      <Input
        type="text"
        placeholder="Enter title here..."
        value={titleController}
        onChange={onTitleChange}
        onKeyUp={onEnterPress}
      />
      <InputRightElement>
        <IconButton
          aria-label="create new task"
          icon={<AddIcon />}
          variant="ghost"
          size="sm"
          fontSize="sm"
          color="current"
          onClick={onCreateTask}
        />
      </InputRightElement>
    </InputGroup>
  );
};
