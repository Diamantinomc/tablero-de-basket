import React from "react";
import '../css/contador.css';

function Contador( { puntosLocal, puntosVisita, esLocal }) {
  return (
    <div className={esLocal ? "puntosLocal": "puntosVisita"}>
      {puntosLocal}
      {puntosVisita}
    </div>

  );
};

export default Contador;