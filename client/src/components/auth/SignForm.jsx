import React from "react";
import { useState } from "react";
import authAPI from "../../api/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import useAuthInput from "../../hooks/useAuthInput";

function SignForm(props) {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [passEmail, setPassEmail] = useState(false);
  // const [passPwd, setPassPwd] = useState(false);

  const { onChange, email, password } = useAuthInput();
  const navigate = useNavigate();

  // const textOnChange = (event) => {
  //   const {
  //     target: { name, value },
  //   } = event;
  //   if (name === "email") {
  //     setEmail(value);
  //     if (value.includes("@") && value.includes(".")) {
  //       setPassEmail(true);
  //     } else {
  //       setPassEmail(false);
  //     }
  //   } else if (name === "password") {
  //     setPassword(value);
  //     if (value.length >= 8) {
  //       setPassPwd(true);
  //     } else {
  //       setPassPwd(false);
  //     }
  //   }
  // };

  const authSign = async (e) => {
    e.preventDefault();
    try {
      let data;
      data = await authAPI.signUp({ email, password });
      console.log(data);
      navigate("/signin");
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
        onChange={onChange}
        data-testid="email-input"
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        required
        value={password}
        onChange={onChange}
        data-testid="password-input"
      />
      <button onClick={authSign} data-testid="signup-button">
        회원가입
      </button>
      <div>
        <Link to="/signin">로그인 하기</Link>
      </div>
    </>
  );
}

export default SignForm;
