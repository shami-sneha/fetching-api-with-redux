import React from "react";
import { useDispatch, useSelector } from "react-redux"; // Import named exports
import { fetchTodos } from "./redux/slice/todo"; // Import named export

import "./index.css";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log("state", state);

  if (state.todo.isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="App">
      <button onClick={() => dispatch(fetchTodos())}>fetch Todos</button>
      {/* Added key prop for list items */}
      <ul>
        {state.todo.todo && state.todo.todo.map((e) => <li>{e.title}</li>)}
      </ul>
    </div>
  );
}

export default App;
