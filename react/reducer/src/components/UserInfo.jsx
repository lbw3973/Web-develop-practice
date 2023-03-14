import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function UserInfo({ user }) {
  const { dispatch } = useContext(UserContext);
  return (
    <div>
      <div key={user.id}>
        <h1>{user.name}</h1>
        <button onClick={() => dispatch({ type: "REMOVE", data: { id: user.id } })}>제거</button>
        <button onClick={() => dispatch({ type: "UPDATE", data: { id: user.id, name: "수정됨" } })}>수정</button>
      </div>
    </div>
  );
}

export default UserInfo;
