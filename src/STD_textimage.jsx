var STD_textimage = (props) => {
    const internal = {
        height: '100%',
        objectFit: 'cover',
    }

    return (
        <div >
            <div className = " flex flex-wrap pa4 items-center justify-center">
                <div className={`flex flex-column items-center items-start pa2 w-50 ${props.font}`}>
                    <div className="tc f1-ns f2-m pa3 f3">{props.title}</div>
                    <div className = "pa2 measure-wide-l measure-m measure-narrow tc f4-m f3-ns f5">{props.body}</div>
                </div>
                <div className="w-50-l w-100 pa3">
                    <img className = "h-50"src = {props.img}></img>
                </div>
            </div>
        </div>
    )   

}

export default STD_textimage