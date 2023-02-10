import React, { useState, useEffect } from "react";
import todoAPI from "../api/todo";
import CreateTodoForm from "../components/todo/CreateTodoForm";
import TodoHeader from "../components/todo/TodoHeader";
import TodoList from "../components/todo/TodoList";
import useAuthRedirect from "../hooks/useAuthRedirect";
import { TodoWrapper } from "../styles/todo/todoStyled.styled";
function TodoPage() {
  useAuthRedirect();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodoList();
  }, []);

  const getTodoList = async () => {
    const data = await todoAPI.getTodoList();
    console.log(data);
    setTodos(data);
  };

  return (
    <TodoWrapper>
      <TodoHeader />
      <CreateTodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </TodoWrapper>
  );
}

export default TodoPage;
