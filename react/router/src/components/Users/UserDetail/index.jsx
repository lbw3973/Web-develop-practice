import React from "react";
import { useParams } from "react-router-dom";
import { userData } from "../../../constants/userData";

function UserDetail() {
  const { userId } = useParams();
  const user = userData.find((user) => user.id === Number(userId));
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}

export default UserDetail;
