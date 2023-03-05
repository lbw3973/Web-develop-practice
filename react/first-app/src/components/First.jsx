import React, { useState } from "react";

function First() {
  const [test, setTest] = useState(2);
  const countUp = () => {
    setTest(test + 1);
  };
  const countdown = () => {
    setTest(test - 1);
  };

  return (
    <div>
      <p>{test}</p>
      <button onClick={countUp}>Count Up</button>
      <button onClick={countdown}>Count Down</button>
    </div>
  );
}

export default First;
