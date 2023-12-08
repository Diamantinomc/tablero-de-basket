import React from "react";

function Contador( { puntos, esLocal }) {
  return (
    <div className={esLocal ? "puntosLocal": "puntosVisita"}>
      {puntos}
    </div>

  );
};

export default Contador;