import STD_popuptext from "./STD_popuptext";
import LOGO2 from "./assets/LOGO3.png"
import "./BKGVideo.css"
const STD_popuptextbar = () => {
    const title = "About Us"
    const body = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquet, eros ac commodo placerat, lectus sapien laoreet orci, non molestie sem leo hendrerit nisi. Pellentesque quis sodales magna, vitae dignissim tortor. Cras pretium nulla ut sapien convallis, vitae ultrices est iaculis. Morbi consequat leo augue, aliquam tincidunt ligula laoreet a. Duis pharetra nulla non nibh feugiat lobortis. Fusce turpis mauris, posuere id rhoncus sit amet, finibus et turpis. Curabitur ac rutrum tellus. Nulla facilisi. Nunc egestas mi eu mauris commodo, id aliquam ex facilisis. Fusce sagittis sollicitudin fringilla. Nulla facilisi. Aenean nec sapien risus. In bibendum odio non pharetra sollicitudin. In pulvinar, nulla et tempus condimentum, sapien diam ultrices mi, lacinia placerat lacus sem in nisi. Donec scelerisque efficitur enim, id pretium leo luctus vitae. "

    return (
        <div className = "flex flex-wrap justify-center  w-100 test">

                <STD_popuptext img={LOGO2} title={title} content={body}></STD_popuptext>
                <STD_popuptext></STD_popuptext>
                <STD_popuptext></STD_popuptext>
                <STD_popuptext></STD_popuptext>
                <STD_popuptext></STD_popuptext>

        </div>
    )
}

export default STD_popuptextbar