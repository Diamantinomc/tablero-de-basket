import React from "react";

function Cronometro({ time }) {
    return(
        <div className="crPrincipal">
            <div className="cronometro">
            {time.min >= 10 ? time.min : '0'+ time.min}:
            {time.seg >= 10 ? time.seg : '0'+ time.seg}:
            {time.cen >= 10 ? time.cen : '0'+ time.cen}
            </div>
        </div>
    )
}

export default Cronometro;