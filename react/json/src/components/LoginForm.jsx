import React, { useState } from "react";

function LoginForm({ onSubmit }) {
  const [userInput, setUserInput] = useState({ email: "", password: "", username: "" });
  const onChange = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  return (
    <form onSubmit={() => onSubmit(e, userInput)}>
      <input name="username" onChange={onChange} />
      <input name="password" type="password" onChange={onChange} />
      <button type="submit">로그인</button>
    </form>
  );
}

export default LoginForm;
