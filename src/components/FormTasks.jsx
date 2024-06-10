import { useState, useContext } from "react";
import { context } from "../context/tasksContext";

export const FormTasks = () => {
  const { tasks, addTask, deleteTask, checkTask } = useContext(context);
  const [task, setTask] = useState({ id: null, content: "", checked: false });
  const [id, setId] = useState(0);

  const handleChange = (e) => {
    setTask({ id, content: e.target.value, checked: false });
    setId(id + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    setTask({ id: null, content: "", checked: false });
  };
  return (
    <>
      <form>
        <input
          autoComplete="off"
          type="text"
          name="inputTask"
          placeholder="Enter a task"
          onChange={(e) => {
            handleChange(e);
          }}
          value={task.content}
        />
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          +
        </button>
      </form>
    </>
  );
};
