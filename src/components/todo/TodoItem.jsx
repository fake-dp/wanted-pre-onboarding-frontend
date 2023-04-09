import React, { useState, useCallback, memo } from "react";
import todoAPI from "../../api/todo";
import { TodoItemWrapper } from "../../styles/todo/todoStyled.styled";

function TodoItem({ todos, setTodos, item }) {
  const [modifyToggle, setModifyToggle] = useState(false);
  const [content, setContent] = useState("");

  const textOnChange = (event) => {
    event.preventDefault();
    setContent(event.target.value);
  };

  const handleCompleteBtnClick = async (id, isCompleted) => {
    if (!content) {
      return;
    }
    const data = await todoAPI.updateTodo(id, content, isCompleted);
    setTodos(todos.map((todo) => (todo.id === id ? data : todo)));
    setModifyToggle(false);
  };

  const handleCancelBtnClick = () => {
    setModifyToggle(false);
  };

  const deleteTodoList = async (id) => {
    await todoAPI.deleteTodo(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onCheckClick = async (id, isCompleted) => {
    const data = await todoAPI.updateTodo(id, item.todo, !isCompleted);
    setTodos(todos.map((todo) => (todo.id === id ? data : todo)));
  };

  return (
    <TodoItemWrapper>
      {modifyToggle ? (
        <li>
          <input
            data-testid="modify-input"
            defaultValue={item.todo}
            autoFocus
            onChange={textOnChange}
          />
          <button
            onClick={() => handleCompleteBtnClick(item.id, item.isCompleted)}
            data-testid="submit-button"
          >
            제출
          </button>
          <button onClick={handleCancelBtnClick} data-testid="cancel-button">
            취소
          </button>
        </li>
      ) : (
        <li>
          <label>
            <input
              onClick={() => onCheckClick(item.id, item.isCompleted)}
              type="checkbox"
              defaultChecked={item.isCompleted}
            />
            <span className={item.isCompleted ? "check" : ""}>{item.todo}</span>
          </label>

          <button
            onClick={() => setModifyToggle(true)}
            data-testid="modify-button"
          >
            수정
          </button>
          <button
            onClick={() => deleteTodoList(item.id)}
            data-testid="delete-button"
          >
            삭제
          </button>
        </li>
      )}
    </TodoItemWrapper>
  );
}

export default memo(TodoItem);
