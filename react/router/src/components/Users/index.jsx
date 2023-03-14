import React from "react";
import { Link } from "react-router-dom";
import { userData } from "../../constants/userData";

function Users() {
  return (
    <div>
      {userData.map((data) => (
        <div key={data.id}>
          <Link to={`/users/${data.id}`}>{data.name}</Link>
        </div>
      ))}
    </div>
  );
}

export default Users;
