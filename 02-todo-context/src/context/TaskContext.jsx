import { createContext, useState } from "react";
/**
 * Una tarea tipica ha de ser:
 * {
 * id: string,
 * title: string
 * completed: boolean
 * }
 */

// Crear el contexto
export const TaskContext = createContext();

// Crear el proveedor (provider) del contexto

export const TaskProvider = ({ children }) => {
  // No olvidar que las tareas deben estar guardadas en el localStorage
  const [task, setTask] = useState(() => {
    const savedTask = localStorage.getItem("task");
    return savedTask ? JSON.parse(savedTask) : [];
  });
  // acciones sobre una tarea:
  // - agregar
  // - eliminar
  // - editar
  // - marcar como completada
  const addTask = (task) => {
    setTask((prevTasks) => [...prevTasks, task]);
  };

  const removeTask = (taskId) => {
    setTask((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const removeTask2 = (taskId) => {};

  const editTask = (taskId, task) => {};

  const toggleTaskCompleted = (taskId) => {
    setTask((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };
  // hooks

  // funciones

  return (
    <TaskContext.Provider
      value={{
        task,
        addTask,
        removeTask,
        editTask,
        toggleTaskCompleted,
      }}
    >
      {/* Renderizar los hijos */}
      {children}
    </TaskContext.Provider>
  );
};
