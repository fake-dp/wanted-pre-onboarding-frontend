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
  LinkText,
} from "../../styles/auth/authStyled.styled";

function LoginForm() {
  const { onChangeAuthInput, email, password, passEmail, passPwd } =
    useAuthInput();
  const navigate = useNavigate();

  const authSign = async (e) => {
    e.preventDefault();
    try {
      let data;
      data = await authAPI.signIn({ email, password });
      localStorage.setItem("access_token", data.access_token);
      navigate("/todo");
    } catch (error) {
      // todo
      // 나중에 모달처리
      // console.log(error.response.data.message);
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
          onChange={onChangeAuthInput}
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
          onChange={onChangeAuthInput}
          data-testid="password-input"
        />
      </AuthInputFlex>
      <SubmitButton
        className={passEmail && passPwd ? "active" : undefined}
        type="submit"
        disabled={!passEmail || !passPwd ? "disabled" : undefined}
        onClick={authSign}
        data-testid="signin-button"
      >
        로그인
      </SubmitButton>

      <LinkText>
        <Link to="/signup">회원가입</Link>
      </LinkText>
    </AuthWrapper>
  );
}

export default LoginForm;
