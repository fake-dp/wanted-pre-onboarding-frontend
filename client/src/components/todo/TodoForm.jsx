import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import todoAPI from "../../api/todo";

function TodoForm(props) {
  const [todos, setTodos] = useState([]);
  const [todoContent, setTodoContent] = useState("");
  const navigate = useNavigate();

  // todo가져오기
  useEffect(() => {
    getTodoList();
  }, []);

  // 로그아웃
  const onClickLogOut = () => {
    localStorage.removeItem("access_token");
    navigate("/signin");
  };

  // todo & content 값 변경
  const textOnChange = (event) => {
    const {
      target: { value },
    } = event;
    setTodoContent(value);
  };

  // todo 생성 test
  const createTodoList = async (event) => {
    event.preventDefault();
    const data = await todoAPI.createTodo(todoContent);
    console.log("create", data);
    setTodos([...todos, data]);
  };

  const getTodoList = async () => {
    const data = await todoAPI.getTodoList();
    console.log("get", data);
    setTodos(data);
  };

  // todo 삭제 test
  const deleteTodoList = async (id) => {
    await todoAPI.deleteTodo(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // todo 수정 test
  const updateTodoList = async (id, isCompleted) => {
    const data = await todoAPI.updateTodo(id, "변경test", isCompleted);
    console.log("ed", data);
    setTodos(todos.map((todo) => (todo.id === id ? data : todo)));
  };

  console.log(todos);
  return (
    <>
      <div>
        <button onClick={onClickLogOut}>로그아웃</button>
      </div>
      <div>
        <input onChange={textOnChange} data-testid="new-todo-input" />
        <button onClick={createTodoList} data-testid="new-todo-add-button">
          추가
        </button>
        {todos.map((e) => (
          <li>
            <label>
              <input type="checkbox" />
              <span>{e.todo}</span>
            </label>

            <>
              <button
                onClick={() => updateTodoList(e.id, e.isCompleted)}
                data-testid="modify-button"
              >
                수정
              </button>
              <button
                onClick={() => deleteTodoList(e.id)}
                data-testid="delete-button"
              >
                삭제
              </button>
            </>
          </li>
        ))}
      </div>
    </>
  );
}

export default TodoForm;
