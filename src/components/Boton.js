import React from "react";

function Boton({ nombre, onClick}) {
    return (
        <button onClick = {onClick}>
            {nombre}
            
        </button>
    )
};

export default Boton;