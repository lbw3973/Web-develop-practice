import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function ProtectedRouter() {
  const navigate = useNavigate();
  useEffect(() => {
    if (true) {
      alert("로그인이 필요합니다");
      navigate("/");
    }
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
}

export default ProtectedRouter;
