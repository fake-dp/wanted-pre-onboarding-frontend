import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, setTodos }) {
  return (
    <div>
      {todos.map((item) => (
        <TodoItem key={item.id} item={item} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
}

export default TodoList;
