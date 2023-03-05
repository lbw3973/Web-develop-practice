import moment from "moment-timezone";
import React, { useState } from "react";

function Clock({ timezone = "Asia/Seoul" }) {
  const [date, setDate] = useState(
    moment().tz(timezone).format("YYYY-MM-DD HH:mm:ss")
  );
  const changeTZ = (timezone) => {
    setDate(moment().tz(timezone).format("YYYY-MM-DD HH:mm:ss"));
  };
  return (
    <div className="clock">
      <h1>현재 시각</h1>
      <h2>{date}</h2>
      <button onClick={() => changeTZ("Asia/Seoul")}>서울</button>
      <button onClick={() => changeTZ("US/Pacific")}>태평양</button>
    </div>
  );
}

export default Clock;
