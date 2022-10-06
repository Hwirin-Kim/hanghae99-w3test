import { useState } from "react";
import "./App.css";

function TodoList({ a }) {
  return <div className="todo-box">{a}</div>;
}

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState();

  const input = (e) => {
    const value = e.target.value;

    setTodo([value]);
  };

  const addTodo = () => {
    setTodoList([...todoList, todo]);
  };

  return (
    <div className="App">
      <input onChange={input} />
      <button onClick={addTodo}>추가하기</button>
      <h1>Todo List</h1>
      <div>
        {todoList.map((a) => {
          return <TodoList a={a} key={a} />;
        })}
      </div>
    </div>
  );
}

export default App;
