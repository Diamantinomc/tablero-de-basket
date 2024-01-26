import React from "react";

function Boton({ texto, isStart, ManejarClic}) {
    return(
        <div className="btnPrincipal">
            <button 
                className={ isStart ? "start" : "restart"}
                onClick={ManejarClic}>
                {texto}
            </button>
        </div>
    )
}

export default Boton;