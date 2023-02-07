import React from "react";
import authAPI from "../../api/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import useAuthInput from "../../hooks/useAuthInput";

import {
  AuthWrapper,
  AuthInput,
  AuthInputFlex,
  SubmitButton,
} from "../../styles/auth/authStyled.styled";

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
    <AuthWrapper>
      <h2>로그인</h2>
      <AuthInputFlex>
        <AuthInput
          name="email"
          type="text"
          placeholder="Email"
          required
          value={email}
          onChange={onChangeSignIn}
          data-testid="email-input"
        />
      </AuthInputFlex>
      <AuthInputFlex>
        <AuthInput
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={onChangeSignIn}
          data-testid="password-input"
        />
      </AuthInputFlex>
      <SubmitButton onClick={authSign} data-testid="signin-button">
        로그인
      </SubmitButton>

      <div>
        <Link to="/signup">회원가입</Link>
      </div>
    </AuthWrapper>
  );
}

export default LoginForm;
