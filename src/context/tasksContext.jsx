import { createContext } from "react";
import { useTasks } from "../hooks/useTasks";

export const context = createContext();

export const ContextProvider = ({ children }) => {
  const { state, addTask, deleteTask, checkTask, editTask } = useTasks();

  return (
    <context.Provider
      value={{
        tasks: state.tasks || state,
        addTask,
        deleteTask,
        checkTask,
        editTask,
      }}
    >
      {children}
    </context.Provider>
  );
};
