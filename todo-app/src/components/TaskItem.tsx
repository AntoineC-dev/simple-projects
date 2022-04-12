import * as React from "react";
import { CloseIcon } from "@chakra-ui/icons";
import { Checkbox, Editable, EditableInput, EditablePreview, IconButton } from "@chakra-ui/react";
import { Task } from "../models";
import { useDeleteTask, useToggleTask, useUpdateTask } from "../store";

interface TaskItemProps {
  task: Task;
}

export const TaskItem = ({ task }: TaskItemProps) => {
  const [titleController, setTitleController] = React.useState<string>(task.title);
  const deleteTask = useDeleteTask();
  const toggleTask = useToggleTask();
  const updateTask = useUpdateTask();
  const onDeleteTask = () => deleteTask(task.id);
  const onToggleTask = () => toggleTask(task.id);
  const onTitleChange = (next: string) => setTitleController(next);
  const onTitleSubmit = (next: string) => {
    if (next.length === 0 || next.trim().length === 0) {
      setTitleController(task.title);
      return;
    }
    setTitleController(next.trim());
    updateTask(task.id, next.trim());
  };
  return (
    <>
      <Checkbox isChecked={task.completed} onChange={onToggleTask} size="lg" />
      <Editable
        defaultValue={task.title}
        value={titleController}
        onSubmit={onTitleSubmit}
        onChange={onTitleChange}
        flexGrow={1}>
        <EditablePreview />
        <EditableInput />
      </Editable>
      <IconButton
        aria-label={`delete ${task.title}`}
        icon={<CloseIcon />}
        size="sm"
        fontSize="sm"
        variant="ghost"
        onClick={onDeleteTask}
      />
    </>
  );
};
