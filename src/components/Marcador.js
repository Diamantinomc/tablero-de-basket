import React from "react";

function Marcador( { puntos, local }) {
  return (
    <div className="MrPrincipal">
      <div className={local ? "local" : "visita"}>
        {puntos}
      </div>
    </div>
  )
};

export default Marcador;