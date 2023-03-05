import React from "react";

function Intro({ name, age, email, comment }) {
  return (
    <div>
      {name}, {age}, {email}, {comment}
    </div>
  );
}

export default Intro;
