import STD_popuptextbar from './STD_popuptextbar';
import IC from '/src/assets/industrial controls/IMG_20210428_113811.jpg'
import IC2 from '/src/assets/industrial controls/IMG_20210810_171423.jpg'
import IC3 from '/src/assets/industrial controls/IMG_20210810_171415.jpg'
import IC4 from '/src/assets/industrial controls/IMG_20210914_074408.jpg'
import IC5 from '/src/assets/industrial controls/IMG_20210908_111401.jpg'

import CA from '/src/assets/commercial automation/IMG_20210317_110107.jpg'

import IN from "/src/assets/instrumentation/20230529_112854.jpg"
import IN2 from "/src/assets/instrumentation/IMG_20201106_110252.jpg"
import IN3 from "/src/assets/instrumentation/IMG_20201109_072028.jpg"
import IN4 from "/src/assets/instrumentation/IMG_20220406_131513.jpg"

import LC from "/src/assets/lighting controls/20230515_124300.jpg"
import LC2 from '/src/assets/lighting controls/IMG_20220407_125341.jpg'

import FA from "/src/assets/fire alarm/IMG_20200716_151227.jpg"
import FA2 from "/src/assets/fire alarm/IMG_20230617_125313_resized_20230617_084320876.jpg"
import FA3 from "/src/assets/fire alarm/IMG_20230601_085003_resized_20230618_121141932.jpg"
import FA4 from "/src/assets/fire alarm/IMG_20230617_125323_resized_20230617_084320723.jpg"
import FA5 from "/src/assets/fire alarm/IMG_20230617_125423_1_resized_20230617_084319979.jpg"
import FA6 from "/src/assets/fire alarm/IMG_20230617_125518_resized_20230617_084319610.jpg"
import FA7 from "/src/assets/fire alarm/IMG_20230617_205313_resized_20230617_085543048.jpg"

import PD from "/src/assets/power distribution/IMG_20210810_171348.jpg"
import PD2 from "/src/assets/power distribution/IMG_20210810_160907.jpg"
import PD3 from "/src/assets/power distribution/IMG_20210810_093904.jpg"

import NC from "/src/assets/electrical construction/IMG_20211209_121003.jpg"
import NC2 from "/src/assets/electrical construction/IMG_20210127_105742.jpg"
import NC3 from "/src/assets/electrical construction/IMG_20210305_152715.jpg"
import NC4 from "/src/assets/electrical construction/IMG_20210908_111258.jpg"
import NC5 from "/src/assets/electrical construction/IMG_20210908_111618.jpg"
import NC6 from "/src/assets/electrical construction/IMG_20211209_121007.jpg"
const Content_Test = () => {

    const title = "About Us"
    const body = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquet, eros ac commodo placerat, lectus sapien laoreet orci, non molestie sem leo hendrerit nisi. Pellentesque quis sodales magna, vitae dignissim tortor. Cras pretium nulla ut sapien convallis, vitae ultrices est iaculis. Morbi consequat leo augue, aliquam tincidunt ligula laoreet a. Duis pharetra nulla non nibh feugiat lobortis. Fusce turpis mauris, posuere id rhoncus sit amet, finibus et turpis. Curabitur ac rutrum tellus. Nulla facilisi. Nunc egestas mi eu mauris commodo, id aliquam ex facilisis. Fusce sagittis sollicitudin fringilla. Nulla facilisi. Aenean nec sapien risus. In bibendum odio non pharetra sollicitudin. In pulvinar, nulla et tempus condimentum, sapien diam ultrices mi, lacinia placerat lacus sem in nisi. Donec scelerisque efficitur enim, id pretium leo luctus vitae. "
    
    const DATA_FILE = [
        {
            title:"Industrial Controls",
            img: [IC2, IC, IC3, IC4, IC5, IC]

        },
        {
            title: "Commercial Automation",
            img: [CA]
        },
        {
            title: "Instrumentation",
            img: [IN, IN2, IN3, IN4, IN2, IN]
        },
        {
            title: "Lighting Controls",
            img: [LC, LC2]
        },
        {
            title: "Fire Alarm & Security",
            img: [FA5, FA7, FA3, FA4, FA, FA6, FA2]
        },
        {
            title: "Power Distribution & Panel Upgrades",
            img: [PD, PD2, PD3]
        },
        {
            title: "Electrical Construction & Renovation",
            img: [NC5, NC2, NC3, NC4, NC, NC6]
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