//import "Tachyons";
import Logo_title from './Logo_title';
import Top_bar_submenu from './Top_bar_submenu';
import test from './assets/TEST.mp4';


const Top_bar = () => {
    const vid = {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '0',
        left: '0',
        objectFit: 'cover',
        zIndex: '-1',
        background: '#174926',
        opacity: '0.2',
    }

    const outside = {
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        opacity: '1',
        background: '#174926',
        zIndex: '1',
    }

    const full = {
        opacity: '1',
        zIndex: '4',
    }
    const fontcolor = {
        color: '#ebc85d'
    }
    return (
    <div style={outside}>
        <div>
            <div className="flex justify-between w-100 pa3 fl">
                <div style ={fontcolor} className="helvetica fw6 pa2 w-30 flex flex-wrap">CALL: 1-647-865-0858</div>
                    <div className="helvetica fw6 pa2 fr">
                        <Top_bar_submenu font = 'helvetica' color = ''></Top_bar_submenu>
                    </div>
                </div>
            <div className="flex flex-wrap w-100">
                <div className="flex flex-wrap w-40-l w-100 pa6 pv3">
                    <div style={full} className = "pv2">
                        <Logo_title font = 'helvetica' color = ''></Logo_title>
                    </div>
                </div>
                <div style={fontcolor} className="flex w-50-l w-100  helvetica justify-center pa2 items-center">
                    <div className="ph4 f1-l f2-m f2 tc">Quality. Safety. Reliability. Every time.</div>
                </div>
            </div>
        </div>
        <video style={vid} loop autoPlay muted>
            {false && <source src = {test}></source>}
        </video>
    </div>
    )
}
export default Top_bar;