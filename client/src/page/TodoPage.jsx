import React from "react";
import TodoForm from "../components/todo/TodoForm";
import useAuthRedirect from "../hooks/useAuthRedirect";

function TodoPage(props) {
  useAuthRedirect();
  return <TodoForm />;
}

export default TodoPage;
