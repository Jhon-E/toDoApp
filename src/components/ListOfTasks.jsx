import { RenderTask } from "./RenderTask";
import { useContext } from "react";
import { context } from "../context/tasksContext.jsx";

const ListOfTask = () => {
  const { tasks } = useContext(context);
  return tasks.length > 0 ? (
    <ul className="listTasks">
      {tasks.map((t) => {
        return <RenderTask key={t.id} task={t} />;
      })}
    </ul>
  ) : (
    <h1 style={{color:"#555"}}>No tasks.</h1>
  );
};

export default ListOfTask;
