import { nanoid } from "nanoid";
import create from "zustand";
import { Task, TaskFilter, TasksStore } from "../models";
import { configurePersist } from "zustand-persist";

const { persist } = configurePersist({
  storage: localStorage,
  rootKey: "root",
});

export const useTasksStore = create<TasksStore>(
  persist({ key: "tasks", allowlist: ["tasks", "filter"] }, (set, get) => ({
    tasks: [],
    filter: "all",
    filteredTasks: () => {
      const filter = get().filter;
      if (filter === "todo") return get().tasks.filter((task) => !task.completed);
      if (filter === "done") return get().tasks.filter((task) => task.completed);
      return get().tasks;
    },
    setFilter: (filter: TaskFilter) => set({ filter }),
    createTask: (title: string) => {
      const id = nanoid();
      const task: Task = { id, title, completed: false };
      set((state) => ({ tasks: [...state.tasks, task] }));
    },
    deleteTask: (id: string) => set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) })),
    toggleTask: (id: string) =>
      set((state) => ({
        tasks: state.tasks.map((task) => {
          if (task.id === id) task.completed = !task.completed;
          return task;
        }),
      })),
    updateTask: (id: string, title: string) =>
      set((state) => ({
        tasks: state.tasks.map((task) => {
          if (task.id === id) task.title = title;
          return task;
        }),
      })),
  }))
);
