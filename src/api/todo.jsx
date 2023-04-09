import { instance } from "./instance";

// Todo API
const todoAPI = {
  getTodoList: async () => {
    const { data } = await instance.get("/todos");
    return data;
  },
  createTodo: async (todo) => {
    const { data } = await instance.post("/todos", { todo });
    return data;
  },
  deleteTodo: async (id) => {
    const { data } = await instance.delete(`/todos/${id}`);
    return data;
  },
  updateTodo: async (id, todo, isCompleted) => {
    const { data } = await instance.put(`/todos/${id}`, { todo, isCompleted });
    return data;
  },
};

export default todoAPI;
