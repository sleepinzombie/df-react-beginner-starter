import { useState } from "react";

function TodoList() {
  // eslint-disable-next-line no-unused-vars
  const [todos, setTodos] = useState([
    { id: 1, task: "Buy groceries", done: true },
    { id: 2, task: "Walk the dog", done: false },
  ]);

  return (
    <div>
      <h3>All Todos</h3>
      <ul></ul>
    </div>
  );
}

export default TodoList;
