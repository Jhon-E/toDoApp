import { MdEdit, MdCheck } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { context } from "../context/tasksContext";
import { useContext, useRef, useState, useEffect } from "react";

export const RenderTask = ({ task }) => {
  const { deleteTask, checkTask, editTask } = useContext(context);
  const [styles, setStyles] = useState({ overflow: "hidden" });
  const [clickCheck, setClickCheck] = useState(false);
  const [clickEdit, setClickEdit] = useState(false);
  const [newCont, setNewCont] = useState(task.content);
  const checkElem = useRef();
  const textElem = useRef();

  useEffect(() => {
    if (checkElem.current.checked || task.checked) {
      setStyles({ textDecoration: "line-through", overflow: "hidden" });
      checkElem.current.checked = true;
    } else {
      setStyles({ textDecoration: "none", overflow: "hidden" });
    }
  }, [clickCheck]);

  useEffect(() => {
    if (clickEdit) {
      setStyles({
        background: "#FFF",
        borderRadius: "5px",
        border: "1px solid black",
        padding: "2px",
      });
      textElem.current.setAttribute("contenteditable", true);
    } else {
      editTask(task, newCont);
      setStyles({ maxWidth: "100%", overflow: "hidden", whiteSpace: "nowrap" });
      textElem.current.setAttribute("contenteditable", false);
    }
  }, [clickEdit]);

  return (
    <li className="task">
      <input
        type="checkbox"
        name="check"
        ref={checkElem}
        onClick={() => {
          checkTask(task);
          setClickCheck(!clickCheck);
        }}
      />
      <p
        style={styles}
        ref={textElem}
        onBlur={(e) => {
          console.log(e.target.innerText);
          setNewCont(e.target.innerText);
        }}
      >
        {newCont}
      </p>
      <aside className="btnsTask">
        <button
          type="button"
          style={{ background: "greenyellow" }}
          className="btns-task edit"
          onClick={() => setClickEdit(!clickEdit)}
        >
          {clickEdit ? <MdCheck /> : <MdEdit />}
        </button>
        <button
          type="button"
          style={{ background: "red" }}
          className="btns-task delete"
          onClick={() => deleteTask(task)}
        >
          <AiFillDelete />
        </button>
      </aside>
    </li>
  );
};
