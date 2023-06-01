const Top_bar_submenu = (props) => {
    const fontcolor = {
        color: '#ebc85d'
    }
    return (
    <div>
        <div style={fontcolor} className = {`${props.color} flex justify-center items-start pa1`}>
            <div className = {`pa2 ${props.font} fw6 w-25`}>ABOUT US</div>
            <div className = {`pa2 ${props.font} fw6 w-25`}>CONTRACTING & SERVICES</div>
            <div className = {`pa2 ${props.font} fw6 w-25`}>JOIN US</div>
            <div className = {`pa2 ${props.font} fw6 w-25`}>TIPS AND TRICKS</div>
            <div className = {`pa2 ${props.font} fw6 w-25`}>NEWS</div>
            <div className = {`pa2 ${props.font} fw6 w-25`}>CONTACT US</div>
        </div>
    </div>)
}

export default Top_bar_submenu;
