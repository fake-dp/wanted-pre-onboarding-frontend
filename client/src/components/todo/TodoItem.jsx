import React, { useState } from "react";
import todoAPI from "../../api/todo";

function TodoItem({ todos, setTodos, item }) {
  const [modifyToggle, setModifyToggle] = useState(false);
  const [todoUpdateText, setTodoUpdateText] = useState("");

  const textOnChange = (event) => {
    event.preventDefault();
    const {
      target: { value },
    } = event;
    setTodoUpdateText(value);
  };

  const deleteTodoList = async (id) => {
    await todoAPI.deleteTodo(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodoList = async (id, isCompleted) => {
    setModifyToggle(false);
    const data = await todoAPI.updateTodo(id, todoUpdateText, isCompleted);
    setTodos(todos.map((todo) => (todo.id === id ? data : todo)));
  };

  return (
    <div>
      {modifyToggle ? (
        <li>
          <input onChange={textOnChange} />

          <button
            onClick={() => updateTodoList(item.id, item.isCompleted)}
            data-testid="modify-button"
          >
            완료
          </button>
          <button
            onClick={() => deleteTodoList(item.id)}
            data-testid="delete-button"
          >
            삭제
          </button>
        </li>
      ) : (
        <li>
          <label>
            <input type="checkbox" />
            <span>{item.todo}</span>
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
    </div>
  );
}

export default TodoItem;
