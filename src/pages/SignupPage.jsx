import React from "react";
import SignForm from "../components/auth/SignForm";
import useAuthRedirect from "../hooks/useAuthRedirect";
function SignupPage() {
  useAuthRedirect();
  return <SignForm />;
}

export default SignupPage;
