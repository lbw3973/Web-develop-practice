import React from "react";
import { useDispatch } from "react-redux";
import LoginForm from "../components/LoginForm";
import { login } from "../store/slices/authSlice";

function LoginPage() {
  const dispatch = useDispatch();
  const onSubmit = (e, user) => {
    e.PreventDefault();
    dispatch(login(user));
  };

  return <LoginForm onSubmit={onSubmit} />;
}

export default LoginPage;
