import { useState } from "react";
import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    const todos = {
      id: Math.floor(Math.random() * 1000),
      value: input
    };
    setTodos((oldList) => [...oldList, todos]);
    setInput("");
  };

  return (
    <div className="App">
      <ul>
        {todos.map((item) => {
          return <li key={item.id}>{item.value}</li>;
        })}
      </ul>

      <input onChange={(e) => setInput(e.target.value)} value={input} />
      <button onClick={addTodo}>Add todo</button>
    </div>
  );
}
