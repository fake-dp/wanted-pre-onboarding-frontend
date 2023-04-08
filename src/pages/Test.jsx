import React from "react";

const Test = () => {
  return (
    <div>
      <h1>회원가입</h1>
      <form>
        <label>이메일</label>
        <input type="email" />
        <label>비밀번호</label>
        <input type="password" />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default Test;
