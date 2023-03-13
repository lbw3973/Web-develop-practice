import React, { useState } from "react";
import * as S from "./style";

// import "@/styles/Button.scss";
// import style from "../styles/Button.module.css";

function Button() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    // <button className={`Button ${size} ${color}`} {...rest}>
    //   <p>Button</p>
    // </button>
    <S.Button isClicked={isClicked} onClick={() => setIsClicked(!isClicked)}>
      {isClicked ? <p>Click!</p> : <p>Button!</p>}
    </S.Button>
  );
}

export default Button;
