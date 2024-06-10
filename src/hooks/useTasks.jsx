import { useReducer } from "react";
import { taskReducer, initialState } from "../reducers/tasksReducer";

export const useTasks = () => {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const addTask = (task) =>
    dispatch({
      type: "ADD_TASK",
      payload: task,
    });
  const deleteTask = (task) =>
    dispatch({
      type: "REMOVE_TASK",
      payload: task,
    });
  const checkTask = (task) =>
    dispatch({
      type: "COMPLETE_TASK",
      payload: task,
    });
  const editTask = (task, newContent) =>
    dispatch({
      type: "EDIT_TASK",
      payload: {task, newContent},
    });

  return { state, addTask, deleteTask, checkTask, editTask };
};
