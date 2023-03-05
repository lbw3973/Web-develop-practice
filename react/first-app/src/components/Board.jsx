import React, { useState } from "react";
import { data } from "../constants/data";

function Board({ living }) {
  console.log(living);
  const [city, setCity] = useState(data.filter((post) => post.city === living));

  return (
    <div>
      {city.map((post) => (
        <div key={post.id}>
          <h2>{post.name}</h2>
          <h3>{post.age}</h3>
        </div>
      ))}
    </div>
  );
}

export default Board;
