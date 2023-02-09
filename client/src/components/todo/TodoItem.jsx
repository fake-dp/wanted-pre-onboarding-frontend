import React from "react";
import todoAPI from "../../api/todo";

function TodoItem({ todos, setTodos, item }) {
  const deleteTodoList = async (id) => {
    await todoAPI.deleteTodo(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodoList = async (id, isCompleted) => {
    const data = await todoAPI.updateTodo(id, "변경test", isCompleted);
    setTodos(todos.map((todo) => (todo.id === id ? data : todo)));
  };

  return (
    <li>
      <label>
        <input type="checkbox" />
        <span>{item.todo}</span>
      </label>

      <>
        <button
          onClick={() => updateTodoList(item.id, item.isCompleted)}
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
      </>
    </li>
  );
}

export default TodoItem;
