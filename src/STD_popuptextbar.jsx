import STD_popuptext from "./STD_popuptext";
import LOGO2 from "./assets/LOGO3.png"


import "./BKGVideo.css"
const STD_popuptextbar = (props) => {


    return (
        <div className = "flex flex-wrap justify-center items-center w-100 test">
            {
                props.content.map((entry) => (<STD_popuptext img={entry.img} title = {entry.title}></STD_popuptext>))
            }
        </div>
    )
}

export default STD_popuptextbar