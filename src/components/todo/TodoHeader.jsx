import React from "react";
import { useNavigate } from "react-router-dom";
import { TodoHeaderWrapper } from "../../styles/todo/todoStyled.styled";

function TodoHeader(props) {
  const navigate = useNavigate();

  const onClickLogOut = () => {
    localStorage.removeItem("access_token");
    navigate("/signin");
  };

  return (
    <TodoHeaderWrapper>
      <h1>My Todo List</h1>
      <button onClick={onClickLogOut}>로그아웃</button>
    </TodoHeaderWrapper>
  );
}

export default TodoHeader;
