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
        background: '#174926'
    }

    const outside = {
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
    }
    const fontcolor = {
        color: '#ebc85d'
    }
    return (
    <div style={outside}>
            <div className="flex w-100 pa3 items-start justify-center">
                    <Top_bar_submenu font = 'helvetica' color = ''></Top_bar_submenu>
            </div>
        <div className="flex flex-wrap w-100 justify-center">
            <div className="flex flex-column w-90-m  w-60-l w-100 pv3 pl4-l  justify-center ">
                <h2 style ={fontcolor} className="helvetica fw6 w-25">CALL: 1-647-865-0858</h2>
                <div  className = "pl6-l pv5">
                    <Logo_title font = 'helvetica' color = ''></Logo_title>
                </div>
            </div>

        </div>
        <video style={vid} loop autoPlay muted>
        </video>
    </div>
    )
}
export default Top_bar;