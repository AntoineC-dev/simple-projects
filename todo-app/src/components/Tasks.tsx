import { HStack, List, ListItem, Text } from "@chakra-ui/react";
import { useFilteredTasks } from "../store";
import { TaskItem } from "./TaskItem";

export const Tasks = () => {
  const tasks = useFilteredTasks();

  if (tasks.length === 0) return <Text fontSize="md">The list is empty...</Text>;
  return (
    <List spacing={3} w="100%">
      {tasks.map((task) => (
        <ListItem key={task.id} as={HStack} spacing={4}>
          <TaskItem task={task} />
        </ListItem>
      ))}
    </List>
  );
};
