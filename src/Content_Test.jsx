import STD_popuptextbar from './STD_popuptextbar';
import IC from '/src/assets/industrial controls/IMG_20210428_113811.jpg'
import CA from '/src/assets/commercial automation/IMG_20210317_110107.jpg'
import IN from "/src/assets/instrumentation/20230529_112854.jpg"
import LC from "/src/assets/lighting controls/20230515_124300.jpg"
import FA from "/src/assets/fire alarm/IMG_20200716_151227.jpg"
import PD from "/src/assets/power distribution/IMG_20210810_171348.jpg"
import NC from "/src/assets/electrical construction/IMG_20211209_121003.jpg"
const Content_Test = () => {

    const title = "About Us"
    const body = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquet, eros ac commodo placerat, lectus sapien laoreet orci, non molestie sem leo hendrerit nisi. Pellentesque quis sodales magna, vitae dignissim tortor. Cras pretium nulla ut sapien convallis, vitae ultrices est iaculis. Morbi consequat leo augue, aliquam tincidunt ligula laoreet a. Duis pharetra nulla non nibh feugiat lobortis. Fusce turpis mauris, posuere id rhoncus sit amet, finibus et turpis. Curabitur ac rutrum tellus. Nulla facilisi. Nunc egestas mi eu mauris commodo, id aliquam ex facilisis. Fusce sagittis sollicitudin fringilla. Nulla facilisi. Aenean nec sapien risus. In bibendum odio non pharetra sollicitudin. In pulvinar, nulla et tempus condimentum, sapien diam ultrices mi, lacinia placerat lacus sem in nisi. Donec scelerisque efficitur enim, id pretium leo luctus vitae. "
    
    const DATA_FILE = [
        {
            title:"Industrial Controls",
            img: IC
        },
        {
            title: "Commercial Automation",
            img: CA
        },
        {
            title: "Instrumentation",
            img: IN
        },
        {
            title: "Lighting Controls",
            img: LC
        },
        {
            title: "Fire alarm",
            img: FA
        },
        {
            title: "Power Distribution",
            img: PD
        },
        {
            title: "New Construction",
            img: NC
        }
    ]


    return (
        <div className="pv3">
        <div className = "flex flex-column justify-center items-center">
            <h1 className = "helvetica">Essential Services</h1>
            <STD_popuptextbar content={DATA_FILE}></STD_popuptextbar>
        </div>
        </div>
    )
}

export default Content_Test;