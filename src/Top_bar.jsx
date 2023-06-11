//import "Tachyons";
import React, {useLayoutEffect, useRef, useEffect, useState } from "react";

import Logo_title from './Logo_title';
import Top_bar_submenu from './Top_bar_submenu';
import test from './assets/TEST.mp4';
import F1 from './assets/foregrounds/1.svg'
import F2 from './assets/foregrounds/2.svg'
import F3 from './assets/foregrounds/3.svg'
import F4 from './assets/foregrounds/4.svg'
import Parallax from './Parallax';



const Top_bar = () => {
    const vid = {
        position: 'absolute',
        width: '100%',
        minHeight: 'auto',
        bottom: '0',
        objectFit: 'cover',
        zIndex: '-1',
    }

    const outside = {
        position: 'relative',
        width: '100%',
        height: '100%',
        opacity: '1',
        background: '#174926',
        overflow: 'hidden',
        zIndex: '1',
    }

    const contain = {
        position: 'relative',
        opacity: '1',
        zIndex: '1',
    }

    const full = {
        opacity: '1',
        zIndex: '4',
        height: '50em'
    }
    const partial = {
        height: 'auto'
    }

    const fontcolor = {
        color: '#ebc85d'
    }
    var [width, setWidth] = useState(window.innerHeight);
    var [shift, setshift] = useState(0);

    const elementRef = useRef(null);

    var handleMouseMove = (event) => {
        var x = 10 * (event.clientX - width)/width;
        setshift(x);
    };
      
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerHeight);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
        window.removeEventListener(
            'mousemove',
            handleMouseMove
        );
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
    <div style={outside}>
        <div className = ""  ref={elementRef}>
            <div className="flex justify-between w-100 pa3 fl">
                <div style ={fontcolor} className="helvetica fw6 pa2 w-30 flex flex-wrap">CALL: 1-647-865-0858</div>
                    <div className="helvetica fw6 pa2 fr">
                        <Top_bar_submenu font = 'helvetica' color = ''></Top_bar_submenu>
                    </div>
                </div>
            <div className="flex flex-wrap w-100">
                <div className="flex flex-column w-30-l w-100 pa6 pv3">
                    <div style={full} className = "flex flex-column  items-start pv2">
                        <div style={partial} className="w-100">
                            <Logo_title font = 'helvetica' color = ''></Logo_title>
                        </div>
                    </div>
                </div>
                <div style={fontcolor} className="flex w-50-l w-100  helvetica justify-center pa2 items-center">
                    <div className="ph4 f1-l f2-m f2 tc">Quality. Safety. Reliability. Every time.</div>
                </div>
            </div>
                <Parallax content={F4} leftshift={shift*0.2}></Parallax>
                <Parallax content={F3} leftshift={shift*0.4}></Parallax>
                <Parallax content={F2} leftshift={shift*0.8}></Parallax>
                <Parallax content={F1} leftshift={shift}></Parallax>
        </div>
    </div>
    )
}
export default Top_bar;