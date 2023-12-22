import React from "react";

function Cronometro({ min, seg, dec }) {
  return (
    <div className="cronometro">
        <p>{min}:{seg}:{dec}</p>
    </div>

  )
}

export default Cronometro;