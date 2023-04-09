import React from "react";
import axios from "axios";
import { useState } from "react";
const Test = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(process.env.REACT_APP_API_URL);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: password,
    };

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/signup`, data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>회원가입</h1>
      <form onSubmit={handleSubmit}>
        <label>이메일</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>비밀번호</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default Test;
