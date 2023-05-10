var STD_Segement = (props) => {
    return (
        <div className={`flex flex-column items-center items-start ${props.font}`}>
            <div className="tc f1-ns f2-m pa3 f3">{props.title}</div>
            <div className = "pa2measure-wide-l measure tc f4-m f3-ns f5">{props.body}</div>
        </div>
    )   

}

export default STD_Segement