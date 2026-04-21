import { useState } from "react";

export default function useTasks(initialTasks) {
  const [tasks, setTasks] = useState(initialTasks);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return { tasks, addTask };
}
