//import "Tachyons";
import Logo_title from './Logo_title';
import Top_bar_submenu from './Top_bar_submenu';
import test from './assets/TEST.mp4';
import styles from './BKGVideo.module.css';


const Top_bar = () => {
    const vid = {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '0',
        left: '0',
        objectFit: 'cover',
        zIndex: '-1'

    }

    const outside = {
        position: 'relative',
        width: '100%',
        height: 'auto',
        overflow: 'hidden',
    }

    return (
    <div style={outside}>
        <div className="flex flex-wrap w-100">
            <div className="flex w-60-l w-100 pa3 pl6-l  justify-center ">
                    <Logo_title font = 'helvetica' color = 'white'></Logo_title>
            </div>
            <div className="flex w-30-l w-100 pa3 items-start justify-center">
                    <Top_bar_submenu font = 'helvetica' color = 'white'></Top_bar_submenu>
            </div>
        </div>
        <video style={vid} loop autoPlay muted>
                <source src={test} type="video/mp4"></source>
        </video>
    </div>
    )
}
export default Top_bar;