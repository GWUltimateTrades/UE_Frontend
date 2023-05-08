//import "Tachyons";
import Logo_title from './Logo_title';
import Top_bar_submenu from './Top_bar_submenu';

const Top_bar = () => (
    <div>
        <div className="flex flex-wrap w-100 ">
            <div class="flex w-75-l w-100 pa3  justify-center ">
                <Logo_title font = 'helvetica' color = 'black-80'></Logo_title>
            </div>
            <div class="flex w-25-l w-100 pa3  items-start">
                <Top_bar_submenu></Top_bar_submenu>
            </div>
        </div>
    </div>
)
export default Top_bar;