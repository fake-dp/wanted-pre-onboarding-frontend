import React, { useState, useCallback, memo } from "react";
import todoAPI from "../../api/todo";
import { TodoItemWrapper } from "../../styles/todo/todoStyled.styled";

function TodoItem({ todos, setTodos, item }) {
  const [modifyToggle, setModifyToggle] = useState(false);
  const [content, setContent] = useState(item);

  const textOnChange = (event) => {
    event.preventDefault();
    setContent({ ...content, todo: event.target.value });
  };
  console.log(todos);
  const updateTodoList = useCallback(
    (content) => {
      todoAPI
        .updateTodo(content.id, content.todo, content.isCompleted)
        .then((res) => {
          setTodos(todos.map((todo) => (todo.id === content.id ? res : todo)));
        })
        .catch((err) => {
          throw new Error(err);
        });
    },
    [item, content]
  );

  const handleCompleteBtnClick = () => {
    if (!content.todo) {
      return;
    }
    updateTodoList(content);
    setModifyToggle(false);
  };

  const handleCancelBtnClick = () => {
    setContent({ ...content, todo: item.todo });
    setModifyToggle(false);
  };

  const onCheckClick = () => {
    updateTodoList({ ...content, isCompleted: !item.isCompleted });
    setContent({ ...content, isCompleted: !item.isCompleted });
  };

  const deleteTodoList = async (id) => {
    await todoAPI.deleteTodo(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onKeyDown = (event) => {
    if (event.keyCode === 13) {
      handleCompleteBtnClick();
    }
  };

  return (
    <TodoItemWrapper>
      {modifyToggle ? (
        <li>
          <input
            data-testid="modify-input"
            placeholder={content.todo}
            onChange={textOnChange}
            onKeyDown={onKeyDown}
          />
          <button onClick={handleCompleteBtnClick} data-testid="submit-button">
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
              onClick={onCheckClick}
              type="checkbox"
              defaultChecked={content.isCompleted}
            />
            <span className={content.isCompleted ? "check" : ""}>
              {content.todo}
            </span>
          </label>

          <button
            onClick={() => setModifyToggle(true)}
            data-testid="modify-button"
          >
            수정
          </button>
          <button
            onClick={() => deleteTodoList(content.id)}
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
