import { useState } from "react";
import { ListGroup } from "react-bootstrap";
import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (input == "") {
      return;
    }
    const todos = {
      id: Math.floor(Math.random() * 1000),
      value: input,
    };
    setTodos((oldList) => [...oldList, todos]);
    setInput(" ");
  };
  const deleteTodo = () => {};
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <div className="card-body">
            {todos.map((item) => {
              return (
                <ListGroup>
                  <ListGroup.Item>{item.value}</ListGroup.Item>
                </ListGroup>
              );
            })}

            <input onChange={(e) => setInput(e.target.value)} value={input} />
            <button className="btn btn-primary" onClick={addTodo}>
              Add todo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
