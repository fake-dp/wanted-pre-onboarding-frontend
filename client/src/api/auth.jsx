import { instance } from "./instance";

const authAPI = {
  signIn: async ({ email, password }) => {
    const { data } = await instance.post("/auth/signin", { email, password });
    return data;
  },

  signUp: async ({ email, password }) => {
    const { data } = await instance.post("/auth/signup", { email, password });
    return data;
  },
};

export default authAPI;
