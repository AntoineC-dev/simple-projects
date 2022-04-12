import { State } from "zustand";
import { Task } from "./Task";

export type TaskFilter = "all" | "todo" | "done";

export interface TasksStore extends State {
  tasks: Task[];
  filter: TaskFilter;
  filteredTasks: () => Task[];
  setFilter: (filter: TaskFilter) => void;
  createTask: (title: string) => void;
  deleteTask: (id: string) => void;
  toggleTask: (id: string) => void;
  updateTask: (id: string, title: string) => void;
}
