import { useState } from "react";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const [value, setValue] = useState("");
  const addTodo = () => {
    setTodos([...todos, value]);
  };
  const deleteTodo = (index) => {
    const newTodos = [...todos];

    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  const completeTodo = (index) => {
    const newTodos = [...todos];
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.push(newTodos[index]);
    newTodos.splice(index, 1);
    setTodos(newTodos);
    setCompleteTodos(newCompleteTodos);
  };

  return (
    <div>
      {" "}
      <h1>To Do List</h1>{" "}
      <input onChange={(e) => setValue(e.target.value)} type="text" />{" "}
      <button onClick={addTodo}>ADD</button>{" "}
      <ul>
        {" "}
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)}>Delete</button>
            <button onClick={() => completeTodo(index)}>Done</button>
          </li>
        ))}{" "}
      </ul>{" "}
      <h1>Completed</h1>
      <ul>
        {" "}
        {completeTodos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}{" "}
      </ul>{" "}
    </div>
  );
}
export default App;
