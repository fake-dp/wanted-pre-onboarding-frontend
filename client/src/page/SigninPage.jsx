import React from "react";
import LoginForm from "../components/auth/LoginForm";
import useAuthRedirect from "../hooks/useAuthRedirect";
function SigninPage() {
  useAuthRedirect();
  return <LoginForm />;
}

export default SigninPage;
