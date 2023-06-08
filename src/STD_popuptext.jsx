import React, { useEffect, useState } from "react";

const STD_popuptext = (props) => {

    var s1anim = {
        transition: "width 1s, height 1s",
        position: 'relative',
    }

    var s1wide_shrunk = {
        width: "60%",
        height: "200px"
    }

    var s1wide_enlarged = {
        width: "60%",
        height: "400px"
    }

    var s1tall_shrunk = {
        width: "300px",
        height: "400px"
    }

    var s1tall_enlarged = {
        width: "700px",
        height: "400px"
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

    const calc = (expanded) => {
        return expanded === false ? 
            (width === false ? s1wide_shrunk : s1tall_shrunk) : 
            (width === false ? s1wide_enlarged : s1tall_enlarged) 
    }
    var [width, setWidth] = useState(
        window.matchMedia("(min-width:60em)").matches
    );
    var [sizestate,setSize] = useState(false)
    var [mode, setMode] = useState(calc(false));
    var [text, setText] = useState("")

    useEffect(() => {
        const handler = () => {
            console.log(window.matchMedia("(min-width:60em)").matches)
            setWidth(window.matchMedia("(min-width:60em)").matches)
            setMode(calc(false))
        }
        window.addEventListener('resize', handler);
        return () => window.removeEventListener("resize", handler);
    })

    return (
        <div style={Object.assign({},s1anim,mode)} className="helvetica" onMouseEnter={() => {setSize(true); setMode(calc(true)); setText(props.content); console.log(width)}} onMouseLeave={() => {setSize(false); setMode(calc(false)); setText("")}}>
            <div>
                <div style={internal} className="pa2">
                    <div className = "flex flex-column ">
                        <h2 className="">{props.title}</h2>
                        <div style={text_content} className="">{text}</div>
                    </div>
                </div>
                <img style={img} src={props.img}></img>
            </div>
        </div>
    );
}

export default STD_popuptext; 