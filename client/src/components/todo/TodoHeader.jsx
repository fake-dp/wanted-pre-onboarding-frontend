import React from "react";
import { useNavigate } from "react-router-dom";

function TodoHeader(props) {
  const navigate = useNavigate();

  const onClickLogOut = () => {
    localStorage.removeItem("access_token");
    navigate("/signin");
  };

  return (
    <div>
      <h1>My Todo List</h1>
      <button onClick={onClickLogOut}>로그아웃</button>
    </div>
  );
}

export default TodoHeader;
