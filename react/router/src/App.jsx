import { useState } from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import Posts from "./components/Posts";
import Users from "./components/Users";
import PostDetail from "./components/Posts/PostDetail";
import PostLayout from "./components/Posts/PostLayout";
import UserDetail from "./components/Users/UserDetail";
import UserLayout from "./components/Users/UserLayout";

function App() {
  return (
    <div>
      <nav>
        <NavLink
          style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
          to="/"
        >
          Home
        </NavLink>{" "}
        |{" "}
        <NavLink
          style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
          to="/posts"
        >
          to Posts
        </NavLink>{" "}
        |{" "}
        <NavLink
          style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
          to="/users"
        >
          to Users
        </NavLink>
      </nav>
      <Routes>
        {/* <Route path="posts" element={<Posts />} />
        <Route path="posts/:postId" element={<PostDetail />} /> */}
        <Route path="posts" element={<PostLayout />}>
          <Route index element={<Posts />} />
          <Route path=":postId" element={<PostDetail />} />
        </Route>
        <Route path="users" element={<UserLayout />}>
          <Route index element={<Users />} />
          <Route path=":userId" element={<UserDetail />} />
        </Route>
        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
    </div>
  );
}

export default App;
