import "./App.css";
import "./components/ListOfTasks";
import ListOfTask from "./components/ListOfTasks";
import { RenderClock } from "./components/RenderClock";
import { FormTasks } from "./components/FormTasks";
import useFetch from "./context/useFecth";
import { useState } from "react";

function App() {
  const { data, loading } = useFetch("https://api.quotable.io/random");
  const [opc, setOpc] = useState("all");

  return (
    <div className="globalContainer">
      <section className="header">
        <header>
          <h1>To-do list</h1>
          {loading ? (
            <h4>Loading...</h4>
          ) : data ? (
            <>
              <h4>"{data.content}"</h4>
              <h5>- {data.author}</h5>
            </>
          ) : (
            <h4>Error</h4>
          )}
        </header>
      </section>
      {/* ACA VAN LAS TAKS */}
      <FormTasks />
      <section className="TaskBox">
        <ListOfTask opc={opc} />
      </section>
      <ul className="opc">
        <li
          onClick={() => setOpc("all")}
          className={opc == "all" ? "selectOpc" : ""}
        >
          All
        </li>
        <li
          onClick={() => setOpc("complete")}
          className={opc == "complete" ? "selectOpc" : ""}
        >
          Checked
        </li>
        <li
          onClick={() => setOpc("incomplete")}
          className={opc == "incomplete" ? "selectOpc" : ""}
        >
          Incomplete
        </li>
      </ul>
      <RenderClock />
      <footer style={{ color: "#AAA" }}>TODO APP by Jhoneiker</footer>
    </div>
  );
}

export default App;
