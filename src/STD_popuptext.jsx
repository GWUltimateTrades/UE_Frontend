import React, { useEffect, useState } from "react";

const STD_popuptext = () => {

    var s1hover = {
        transition: "width 1s",
        width: "300px",
    }

    var s1static = {
        transition: "width 1s",
        width: "100px",
    }

 
    var [mode, setMode] = useState(s1static);

    return (
        <div style={mode} className="ba" onMouseEnter={() => setMode(s1hover)} onMouseLeave={() => setMode(s1static)}>
            what
        </div>
    );
}

export default STD_popuptext; 