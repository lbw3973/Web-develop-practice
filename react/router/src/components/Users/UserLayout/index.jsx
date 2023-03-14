import React from "react";
import { Outlet } from "react-router-dom";

function UserLayout() {
  return (
    <div>
      UserLayout (공통 컴포넌트)
      <Outlet />
    </div>
  );
}

export default UserLayout;
