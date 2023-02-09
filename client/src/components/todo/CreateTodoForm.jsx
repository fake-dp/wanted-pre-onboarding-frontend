import React, { useState, useRef } from "react";
import todoAPI from "../../api/todo";

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
    console.log(inputRef.current.value);
    setTodos([...todos, data]);
    inputRef.current.value = "";
  };

  const onKeyDown = (event) => {
    if (event.keyCode === 13) {
      createTodoList(event);
    }
  };

  return (
    <div>
      <input
        ref={inputRef}
        onChange={textOnChange}
        data-testid="new-todo-input"
        onKeyDown={onKeyDown}
      />
      <button onClick={createTodoList} data-testid="new-todo-add-button">
        추가
      </button>
    </div>
  );
}

export default CreateTodoForm;
