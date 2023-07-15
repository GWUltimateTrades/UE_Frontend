import React, { useEffect, useState } from "react";


const Top_bar_submenu = (props) => {
    const fontcolor = {
        color: '#ebc85d'
    }
    var [width, setWidth] = useState(
        window.matchMedia("(max-width:70em)").matches
    );

    useEffect(() => {
        const handler = () => {
           // console.log(window.matchMedia("(max-width:70em)").matches)
            setWidth(window.matchMedia("(max-width:70em)").matches)
        }
        window.addEventListener('resize', handler);
        return () => window.removeEventListener("resize", handler);
    })
    return (
    <div className="w-100">
        <div>{!width && (<div style={fontcolor} className = {`${props.color} flex flex-wrap items-end pa1`}>
            <div className = {`pa2 ${props.font} fw6 ph4`}>ABOUT US</div>
            <div className = {`pa2 ${props.font} fw6 ph4`}>CONTRACTING & SERVICES</div>
            <div className = {`pa2 ${props.font} fw6 ph4`}>HEALTH & SAFETY</div>
            <div className = {`pa2 ${props.font} fw6 ph4 `}>TIPS AND TRICKS</div>
            <div className = {`pa2 ${props.font} fw6 ph4`}>NEWS</div>
            <div className = {`pa2 ${props.font} fw6 ph4`}>JOIN US</div>
            <div className = {`pa2 ${props.font} fw6 ph4`}>CONTACT US</div>
        </div>)}</div>
    </div>)
}

export default Top_bar_submenu;
