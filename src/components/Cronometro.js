import React from "react";

function Cronometro({ time }) {
  return (
    <div className="cronometro">
        <span>{time.min >= 10 ? time.min : "0" + time.min}</span>&nbsp;:&nbsp;
        <span>{time.seg >= 10 ? time.seg : "0" + time.seg}</span>&nbsp;:&nbsp;
        <span>{time.mil >= 10 ? time.mil : "0" + time.mil}</span>&nbsp;
    </div>

  )
}

export default Cronometro;