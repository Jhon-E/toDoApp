import "./App.css";
import "./components/ListOfTasks";
import ListOfTask from "./components/ListOfTasks";
import { RenderClock } from "./components/RenderClock";
import { FormTasks } from "./components/FormTasks";
import useFetch from "./context/useFecth";

function App() {
  const { data, loading } = useFetch("https://api.quotable.io/random");
  return (
    <div className="globalContainer">
      <section className="header">
        <header>
          <RenderClock />
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
        <FormTasks />
      </section>
      {/* ACA VAN LAS TAKS */}
      <section className="TaskBox">
        <ListOfTask />
      </section>
      <span style={{ color: "#AAA", marginTop:"2rem"}}>TODO APP by Jhoneiker</span>
    </div>
  );
}

export default App;
