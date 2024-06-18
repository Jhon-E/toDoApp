import { RenderTask } from "./RenderTask";
import { useContext, useEffect, useState } from "react";
import { context } from "../context/tasksContext.jsx";

const ListOfTask = ({ opc }) => {
  const { tasks } = useContext(context);
  const [filterTasks, setFilterTasks] = useState(tasks);

  useEffect(() => {
    switch (opc) {
      case "complete":
        setFilterTasks(tasks.filter((t) => t.checked === true));
        break;
      case "incomplete":
        setFilterTasks(tasks.filter((t) => t.checked === false));
        break;
      case "all":
        setFilterTasks(tasks);
        break;
      default:
        throw new Error("Opción invalida");
    }
  }, [opc, tasks]);

  return tasks.length > 0 ? (
    <ul className="listTasks">
      {filterTasks.map((t) => {
        return <RenderTask key={t.id} task={t} />;
      })}
    </ul>
  ) : (
    <h1 style={{ color: "#555" }}>No tasks.</h1>
  );
};

export default ListOfTask;
