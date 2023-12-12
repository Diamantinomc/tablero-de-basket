import React from "react";
import '../css/longTime.css';

function LongTime ({ tiempoLargo }) {
  return (
    <div className="LongTime">
      {tiempoLargo}
    </div>
  );
};

export default LongTime;