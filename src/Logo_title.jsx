import logo from './assets/LOGO2.png'

var Logo_title = (props) => {
    const fontcolor = {
        color: '#ebc85d',
    }
    return (
    <div className=' flex flex-wrap items-center h-auto'>
            <img className = "w-100 v-mid " src = {logo}></img>
        <div className = 'w-100 pa3-l pa2'>
            <div className="flex flex-column items-center justify-center" style={fontcolor}>
                <div className = {`f3-l f2-m f1 fw6 lh-title tracked-tight measure-narrow v-base tl-l tc ${props.color} ${props.font}`}>GW ULTIMATE TRADES CORPORATION</div>
            </div>
        </div>
    </div>
)
    }
export default Logo_title