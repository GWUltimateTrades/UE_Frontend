import logo from './assets/LOGO1.SVG'

var Logo_title = (props) => (
    <div className='flex flex-wrap items-center mw5 mw6-l'>
        <div className = 'w-40-l w-100 '>
            <img className = "v-mid" src = {logo}></img>
        </div>
        <div className = 'w-60-l w-100 pa3-l pa2'>
                <div className = {`f2-l f3 fw6 lh-title tracked-tight measure-narrow v-base tl-l tc ${props.color} ${props.font}`}>GW Ultimate Trades Corporation</div>
        </div>
    </div>
)

export default Logo_title