import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";

function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
      <footer>푸터</footer>
    </>
  );
}
export default Layout;
