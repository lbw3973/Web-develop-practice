import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import UserInfo from "./UserInfo";

function UserList() {
  const { state: users, dispatch } = useContext(UserContext);
  const [index, setIndex] = useState(100);
  return (
    <div>
      {users.map((user) => (
        <UserInfo key={user.id} user={user} />
      ))}
      <button
        onClick={() => {
          dispatch({ type: "ADD", data: { id: index, name: "이병욱" } });
          setIndex(index + 1);
        }}
      >
        추가
      </button>
    </div>
  );
}

export default UserList;
