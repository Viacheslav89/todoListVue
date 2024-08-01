import { ref } from "vue";
import type { Task } from "../types";

const tasks = ref<Array<Task>>(
  JSON.parse(localStorage.getItem("tasks") || "[]")
);

export const useTasks = () => {
  const createTask = (formData: Task) => {
    if(!formData.text) return;
    const newTask = {
      ...formData,
      id: +(localStorage.getItem("taskId") || 1) + 1,
    };



    tasks.value.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks.value));
    localStorage.setItem("taskId", JSON.stringify(newTask.id));
  };

  const editTask = (currentTask: Task, editedTextTask: string) => {
    if(!editedTextTask) return;
    const idxEditTask = tasks.value.findIndex(
      (task) => task.id === currentTask.id
    );

    const selectedTask = {
      ...currentTask,
      text: editedTextTask,
      isEdit: false,
    };

    tasks.value.splice(idxEditTask, 1, selectedTask);
    localStorage.setItem("tasks", JSON.stringify(tasks.value));
  };

  const deleteTask = (taskId: number) => {
    tasks.value = tasks.value.filter((task) => task.id !== taskId);
    localStorage.setItem("tasks", JSON.stringify(tasks.value));
  };

  const changeStatusTask = (currentTask: Task) => {
    const selectedTask = {
      ...currentTask,
      active: !currentTask.active,
    };

    const idxEditTask = tasks.value.findIndex(
      (task) => task.id === currentTask.id
    );
    tasks.value.splice(idxEditTask, 1, selectedTask);
    localStorage.setItem("tasks", JSON.stringify(tasks.value));
  };

  return {
    tasks,
    createTask,
    editTask,
    deleteTask,
    changeStatusTask,
  };
};
