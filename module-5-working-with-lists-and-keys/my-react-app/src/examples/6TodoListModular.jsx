/* eslint-disable no-unused-vars */
import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, task: "Buy groceries", done: false },
    { id: 2, task: "Walk the dog", done: false },
  ]);

  function addTodo() {
    setTodos([...todos, { id: Date.now(), task: "New Task", done: false }]);
  }

  function toggleDone(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div>
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}

export default TodoList;
