import React, { useState, useRef } from "react";
import todoAPI from "../../api/todo";
import { CreateTodoFormWrapper } from "../../styles/todo/todoStyled.styled";
function CreateTodoForm({ todos, setTodos }) {
  const [todoText, setTodoText] = useState("");
  const inputRef = useRef();

  const textOnChange = (event) => {
    event.preventDefault();
    const {
      target: { value },
    } = event;
    setTodoText(value);
  };

  const createTodoList = async (event) => {
    event.preventDefault();
    if (!todoText) return;
    const data = await todoAPI.createTodo(todoText);
    setTodos([...todos, data]);
    inputRef.current.value = "";
    setTodoText("");
  };

  const onKeyDown = (event) => {
    if (event.keyCode === 13) {
      createTodoList(event);
    }
  };

  return (
    <CreateTodoFormWrapper>
      <input
        ref={inputRef}
        onChange={textOnChange}
        data-testid="new-todo-input"
        onKeyDown={onKeyDown}
      />
      <button onClick={createTodoList} data-testid="new-todo-add-button">
        추가
      </button>
    </CreateTodoFormWrapper>
  );
}

export default CreateTodoForm;
