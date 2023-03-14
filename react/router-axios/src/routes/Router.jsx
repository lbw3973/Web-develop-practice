import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/Common/Layout";
import Posts from "../pages/Posts";
import PostDetail from "../pages/Posts/PostDetail";
import Users from "../pages/Users";
import UserDetail from "../pages/Users/UserDetail";
import ProtectedRouter from "./ProtectedRouter";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="posts" element={<Posts />} />
        <Route path="posts/:postId" element={<PostDetail />} />
        <Route element={<ProtectedRouter />}>
          <Route path="users" element={<Users />} />
          <Route path="users/:userId" element={<UserDetail />} />
        </Route>
        <Route path="*" element={<p>Not Found</p>} />
      </Route>
    </Routes>
  );
}

export default Router;
