import React, { useEffect, useState, useRef } from "react";

const STD_image = (props) => {
    const calcState = () => {
        var b = Math.abs(props.threshold - props.B_state) 
        return b < 50 ? 1 : (b < 150 ? 1-(b-50)/100 : 0)
    }
    return (
        <img src = {props.img} style = {{
            opacity: calcState(), 
            position: "absolute",
            height: "100%",
            width: '100%',
            top: '0',
            left: '0',
            objectFit: 'cover',
            zIndex: '0'
        }}></img>
    )


}

const STD_imagetransisionset = (props) => {
    let [Bstate, setBastate] = useState(0);
    let [direction, setdir] = useState(1);
    var [hovered, setHover] = useState(false)

    let C_state = useRef();
   // https://overreacted.io/making-setinterval-declarative-with-react-hooks/
    function useInterval(callback, delay) {
        const savedCallback = useRef();
      
        // Remember the latest callback.
        useEffect(() => {
          savedCallback.current = callback;
        }, [callback]);
      
        // Set up the interval.
        useEffect(() => {
          function tick() {
            savedCallback.current();
          }
          if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
          }
        }, [delay]);
      }

    useInterval(() => {
        if (hovered || (Bstate - 50)% 200 != 0) calcBstate();
    }, 1000/60)

    const calcBstate = () => {
        if (props.content.length === 1) {return;}
        if (Bstate >= (props.content.length)*150-50) setdir(-1)
        if (Bstate <= 0) setdir(1)
        setBastate(Bstate + direction*2)
       // console.log([Bstate, direction])
    }

    return (
        <div style = {{background: "ffffff"}}onMouseEnter = {() => {setHover(true)}} onMouseLeave = {()=>{setHover(false)}}>
            {props.content.map((entry, index) => (<STD_image img={entry} key={index} threshold={(index)*200} B_state={Bstate} dir={direction}></STD_image>))}
        </div>
    )
}

export default STD_imagetransisionset
