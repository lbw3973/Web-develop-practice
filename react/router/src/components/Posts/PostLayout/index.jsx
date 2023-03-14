import React from "react";
import { Outlet } from "react-router-dom";

function PostLayout() {
  return (
    <div>
      PostLayout (공통 컴포넌트)
      <Outlet />
    </div>
  );
}

export default PostLayout;
