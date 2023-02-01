import React from "react";
import { Routes, Route } from "react-router-dom";
import SigninPage from "../page/SigninPage";
import SignupPage from "../page/SignupPage";
import TodoPage from "../page/TodoPage";

function AppRouter(props) {
  return (
    <Routes>
      <Route path="/signin" element={<SigninPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/todo" element={<TodoPage />} />
    </Routes>
  );
}

export default AppRouter;
