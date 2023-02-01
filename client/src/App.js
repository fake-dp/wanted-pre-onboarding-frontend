import { useState } from "react";
import authAPI from "./api/auth";

function App() {
  const [email, setEmail] = useState("test3215@naver.com");
  const [password, setPassword] = useState("123456789");

  const authAPIbtn = async () => {
    authAPI
      .signUp({ email, password })
      .then(() => {
        console.log("회원가입 성공");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <button onClick={authAPIbtn}>클릭</button>
    </div>
  );
}

export default App;
