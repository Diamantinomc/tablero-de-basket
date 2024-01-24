import React from "react";

function Cronometro({ time }) {
    return(
        <div className="crPrincipal">
            <div className="cronometro">
            {time.min >= 10 ? time.min : '0'+ time.min}:
            {time.seg >= 10 ? time.seg : '0'+ time.seg}:
            {time.mil >= 10 ? time.mil : '0'+ time.mil}
            </div>
        </div>
    )
}

export default Cronometro;