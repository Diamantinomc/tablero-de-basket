import React, { useEffect, useState } from "react";
import '../css/longTime.css';

function LongTime() {

  const [deciSecond, setDeciSecond] = useState(0);
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  
  var timer;
  useEffect(() => {

    timer = setInterval(() => {
      setSecond(second+1);

      if(second === 59) {
        setMinute(minute+1);
        setSecond(0);
      } 
    }, 1000)

    return () => clearInterval(timer)
  })

  return (
    <div className="LongTime">
      <div className="container">
        <div className="timer-container">
          <h1>00:00</h1>
        </div>
      </div>
    </div>
  );
};

export default LongTime;