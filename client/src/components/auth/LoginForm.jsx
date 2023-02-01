import React from "react";
import authAPI from "../../api/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const textOnChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const authSign = async (event) => {
    event.preventDefault();
    try {
      let data;
      data = await authAPI.signIn({ email, password });
      localStorage.setItem("token", data.access_token);
      console.log("fuck", data);
      navigate("/todo");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <input
        name="email"
        type="text"
        placeholder="Email"
        required
        value={email}
        onChange={textOnChange}
        data-testid="email-input"
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        required
        value={password}
        onChange={textOnChange}
        data-testid="password-input"
      />
      <button onClick={authSign} data-testid="signin-button">
        로그인
      </button>
    </>
  );
}

export default LoginForm;
