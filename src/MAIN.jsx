import Top_bar from "./Top_bar";
import About_us from "./About_us";
import Content_Test from "./Content_Test";
const MAIN = () => {
    const BKG = {
        background: "#18692f",
        color: "#FFFFFF"
    }

    return (
    <div>
        <Top_bar></Top_bar>
        <div style = {BKG}>
        <About_us></About_us>
        <Content_Test></Content_Test>
        </div>
        <div className = "flex flex-column pa3 pb5 items-center justify-center helvetica">
            <h2>Contact Us</h2>
            <div>Phone: 1-647-865-0858</div>
            <div>Email: GWUltimateTrades@hotmail.com</div>
        </div>
    </div>
    )
}

export default MAIN;