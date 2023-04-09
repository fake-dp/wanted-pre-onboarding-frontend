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
  const { onChangeAuthInput, email, password, passEmail, passPwd } =
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
      console.log(error.response.data.message);
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
          onChange={onChangeAuthInput}
          data-testid="email-input"
        />
        <span className={passEmail ? "active" : undefined}>
          {passEmail ? <AiFillCheckCircle /> : <AiFillCloseCircle />}
        </span>
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
        <span className={passPwd ? "active" : undefined}>
          {passPwd ? <AiFillCheckCircle /> : <AiFillCloseCircle />}
        </span>
      </AuthInputFlex>

      <SubmitButton
        className={passEmail && passPwd ? "active" : undefined}
        type="submit"
        disabled={!passEmail || !passPwd ? "disabled" : undefined}
        onClick={authSign}
        data-testid="signup-button"
      >
        회원가입
      </SubmitButton>
      <LinkText>
        <Link to="/signin">로그인 하기</Link>
      </LinkText>
    </AuthWrapper>
  );
}

export default SignForm;
