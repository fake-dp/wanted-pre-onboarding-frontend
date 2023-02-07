import React from "react";
import authAPI from "../../api/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";
import useAuthInput from "../../hooks/useAuthInput";

import {
  AuthWrapper,
  AuthInput,
  AuthInputFlex,
  SubmitButton,
  LinkText,
} from "../../styles/auth/authStyled.styled";

function SignForm() {
  const { onChangeSignUp, email, password, passEmail, passPwd } =
    useAuthInput();
  const navigate = useNavigate();

  const authSign = async (e) => {
    e.preventDefault();
    try {
      let data;
      data = await authAPI.signUp({ email, password });
      console.log(data);
      navigate("/signin");
    } catch (error) {
      console.log(error.response.data.message[0]);
    }
  };

  return (
    <AuthWrapper>
      <h2>회원가입</h2>
      <AuthInputFlex>
        <AuthInput
          name="email"
          type="text"
          placeholder="Email"
          required
          value={email}
          onChange={onChangeSignUp}
          data-testid="email-input"
        />
        <span>{passEmail ? <AiFillCheckCircle /> : <AiFillCloseCircle />}</span>
      </AuthInputFlex>

      <AuthInputFlex>
        <AuthInput
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={onChangeSignUp}
          data-testid="password-input"
        />
        <span>{passPwd ? <AiFillCheckCircle /> : <AiFillCloseCircle />}</span>
      </AuthInputFlex>

      <SubmitButton onClick={authSign} data-testid="signup-button">
        회원가입
      </SubmitButton>
      <LinkText>
        <Link to="/signin">로그인 하기</Link>
      </LinkText>
    </AuthWrapper>
  );
}

export default SignForm;
