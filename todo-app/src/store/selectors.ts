import { TasksStore } from "../models";

// Tasks
export const tasksSelector = (state: TasksStore) => state.tasks;
export const filteredTasksSelector = (state: TasksStore) => state.filteredTasks();
export const createTaskSelector = (state: TasksStore) => state.createTask;
export const deleteTaskSelector = (state: TasksStore) => state.deleteTask;
export const toggleTaskSelector = (state: TasksStore) => state.toggleTask;
export const updateTaskSelector = (state: TasksStore) => state.updateTask;

// Filters
export const filterSelector = (state: TasksStore) => state.filter;
export const setFilterSelector = (state: TasksStore) => state.setFilter;
