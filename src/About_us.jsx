import STD_Segement from "./STD_Segement";

const About_us = () => {

    const title = "About Us"
    const body = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquet, eros ac commodo placerat, lectus sapien laoreet orci, non molestie sem leo hendrerit nisi. Pellentesque quis sodales magna, vitae dignissim tortor. Cras pretium nulla ut sapien convallis, vitae ultrices est iaculis. Morbi consequat leo augue, aliquam tincidunt ligula laoreet a. Duis pharetra nulla non nibh feugiat lobortis. Fusce turpis mauris, posuere id rhoncus sit amet, finibus et turpis. Curabitur ac rutrum tellus. Nulla facilisi. Nunc egestas mi eu mauris commodo, id aliquam ex facilisis. Fusce sagittis sollicitudin fringilla. Nulla facilisi. Aenean nec sapien risus. In bibendum odio non pharetra sollicitudin. In pulvinar, nulla et tempus condimentum, sapien diam ultrices mi, lacinia placerat lacus sem in nisi. Donec scelerisque efficitur enim, id pretium leo luctus vitae. "
    
    return (
        <STD_Segement title={title} body = {body} font = "helvetica"></STD_Segement>
    )
}

export default About_us;