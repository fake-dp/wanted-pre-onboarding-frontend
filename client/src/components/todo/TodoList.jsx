import React from "react";
import TodoItem from "./TodoItem";
import { TodoListWrapper } from "../../styles/todo/todoStyled.styled";

function TodoList({ todos, setTodos }) {
  return (
    <TodoListWrapper>
      {todos.map((item) => (
        <TodoItem key={item.id} item={item} todos={todos} setTodos={setTodos} />
      ))}
    </TodoListWrapper>
  );
}

export default TodoList;
