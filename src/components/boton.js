import React from "react";

function Boton({ texto, increase, handleClic }) {
  return (
    <button 
      className= {increase ? "increase": "decrease"}
      onClick={handleClic}>
      {texto}
    </button>
    )
};

export default Boton;