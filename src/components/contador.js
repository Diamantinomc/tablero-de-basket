import React from "react";
import '../css/contador.css';

function Contador( { puntos, esLocal }) {
  return (
    <div className={esLocal ? "puntosLocal": "puntosVisita"}>
      {puntos}
    </div>

  );
};

export default Contador;