import logo from './assets/LOGO2.png'

var Logo_title = (props) => {
    const fontcolor = {
        color: '#ebc85d',
    }
    return (
    <div className=' flex flex-wrap items-center w-100'>
        <div className = 'w-100'>
            <img className = "v-mid" src = {logo}></img>
        </div>
        <div className = 'w-100 pa3-l pa2'>
            <div className="flex flex-column items-center" style={fontcolor}>
                <div className = {`f3-l f3-m f3 fw6 lh-title tracked-tight measure-narrow v-base tl-l tc ${props.color} ${props.font}`}>GW ULTIMATE TRADES</div>
                <div className = {`f3-l f3-m f3 fw6 lh-title tracked-tight measure-narrow v-base tl-l tc ${props.color} ${props.font}`}>CORPORATION</div>
            </div>
        </div>
    </div>
)
    }
export default Logo_title