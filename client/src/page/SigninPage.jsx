import React from "react";
import LoginForm from "../components/auth/LoginForm";
import useAuthRedirect from "../hooks/useAuthRedirect";
function SigninPage(props) {
  useAuthRedirect();
  return <LoginForm />;
}

export default SigninPage;
