import React from "react";
import authAPI from "../../api/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import useAuthInput from "../../hooks/useAuthInput";

function LoginForm() {
  const { onChangeSignIn, email, password } = useAuthInput();
  const navigate = useNavigate();

  const authSign = async (e) => {
    e.preventDefault();
    try {
      let data;
      data = await authAPI.signIn({ email, password });
      localStorage.setItem("access_token", data.access_token);
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
        onChange={onChangeSignIn}
        data-testid="email-input"
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        required
        value={password}
        onChange={onChangeSignIn}
        data-testid="password-input"
      />
      <button onClick={authSign} data-testid="signin-button">
        로그인
      </button>

      <div>
        <Link to="/signup">회원가입</Link>
      </div>
    </>
  );
}

export default LoginForm;
