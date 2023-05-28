import React, { useEffect, useState } from "react";

const STD_popuptext = (props) => {

    var s1hover = {
        transition: "width 1s, height 1s",
        width: "350px",
        height:"400px",
        position: 'relative',
    }

    var s1static = {
        transition: "width 1s, height 1s",
        width: "150px",
        height:"400px",
        position: 'relative',
    }

    const img = {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '0',
        left: '0',
        objectFit: 'cover',
        zIndex: '0'

    }

    const internal = {
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: '1',
    }

    const text_content = {
        overflow: 'hidden',
        height: '300px'
    }
    var [mode, setMode] = useState(s1static);
    var [text, setText] = useState("")
    return (
        <div style={mode} className="helvetica" onMouseEnter={() => {setMode(s1hover); setText(props.content)}} onMouseLeave={() => {setMode(s1static); setText("")}}>
            <div>
                <div style={internal} className="pa2">
                    <h2 className="">{props.title}</h2>
                    <div style={text_content} className="">{text}</div>
                </div>
                <img style={img} src={props.img}></img>
            </div>
        </div>
    );
}

export default STD_popuptext; 