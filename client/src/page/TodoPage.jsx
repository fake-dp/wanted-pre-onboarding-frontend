import React, { useState, useEffect } from "react";
import todoAPI from "../api/todo";
import CreateTodoForm from "../components/todo/CreateTodoForm";
import TodoHeader from "../components/todo/TodoHeader";
import TodoList from "../components/todo/TodoList";
import useAuthRedirect from "../hooks/useAuthRedirect";

function TodoPage() {
  useAuthRedirect();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodoList();
  }, []);

  const getTodoList = async () => {
    const data = await todoAPI.getTodoList();
    setTodos(data);
  };

  return (
    <>
      <TodoHeader />
      <CreateTodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
}

export default TodoPage;
