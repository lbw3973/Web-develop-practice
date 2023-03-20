import axios from "axios";
import React from "react";
import { useCookies } from "react-cookie";

function Login() {
  const [cookies, setCookie, removeCookie] = useCookies();
  const fetchLogin = async () => {
    const response = await axios.post("http://localhost:8000/login", {
      email: "lbw3973@test.com",
      password: "asdf1234",
    });
    setCookie("accessToken", response.data["accessToken"], { path: "/" });
    console.log(cookies);
  };

  return (
    <div>
      <button onClick={fetchLogin}>로그인</button>
    </div>
  );
}

export default Login;
