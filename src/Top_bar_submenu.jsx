const Top_bar_submenu = (props) => {
    const fontcolor = {
        color: '#ebc85d'
    }
    return (
    <div className="w-100">
        <div style={fontcolor} className = {`${props.color} flex items-end pa1`}>
            <div className = {`pa2 ${props.font} fw6 ph4`}>ABOUT US</div>
            <div className = {`pa2 ${props.font} fw6 ph4`}>CONTRACTING & SERVICES</div>
            <div className = {`pa2 ${props.font} fw6 ph4`}>JOIN US</div>
            <div className = {`pa2 ${props.font} fw6 ph4 `}>TIPS AND TRICKS</div>
            <div className = {`pa2 ${props.font} fw6 ph4`}>NEWS</div>
            <div className = {`pa2 ${props.font} fw6 ph4`}>CONTACT US</div>
        </div>
    </div>)
}

export default Top_bar_submenu;
