import React from "react";
import { Routes, Route } from "react-router-dom";
import SigninPage from "../pages/SigninPage";
import SignupPage from "../pages/SignupPage";
import TodoPage from "../pages/TodoPage";

const MyApp = () => {
  return (
    <Routes>
      <Route path="/signin" element={<SigninPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/todo" element={<TodoPage />} />
      <Route path="/" element={<TodoPage />} />
    </Routes>
  );
};

export default MyApp;
