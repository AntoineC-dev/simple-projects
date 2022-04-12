import { useTasksStore } from "./config";
import {
  createTaskSelector,
  deleteTaskSelector,
  filteredTasksSelector,
  filterSelector,
  setFilterSelector,
  tasksSelector,
  toggleTaskSelector,
  updateTaskSelector,
} from "./selectors";

// Tasks
export const useTasks = () => useTasksStore(tasksSelector);
export const useFilteredTasks = () => useTasksStore(filteredTasksSelector);
export const useCreateTask = () => useTasksStore(createTaskSelector);
export const useDeleteTask = () => useTasksStore(deleteTaskSelector);
export const useToggleTask = () => useTasksStore(toggleTaskSelector);
export const useUpdateTask = () => useTasksStore(updateTaskSelector);

// Filters
export const useFilter = () => useTasksStore(filterSelector);
export const useSetFilter = () => useTasksStore(setFilterSelector);
