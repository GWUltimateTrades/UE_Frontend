const Parallax = (props) => {
    const lay = {
        transition: "",
        position:"absolute",
        width: '120%',
        minHeight: 'auto',
        bottom: '-2%',
        objectFit: 'cover',
        zIndex: '-1',
    }

    
    return (
        <div style={Object.assign({},lay,{left: '-' + String(props.leftshift + 10) + '%'})}>  
            <img src={props.content}></img>
        </div>
    )
}

export default Parallax