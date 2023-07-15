import Top_bar from "./Top_bar";
import About_us from "./About_us";
import Content_Test from "./Content_Test";
const MAIN = () => {
    const BKG = {
        background: "#3B6D47",
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
            <a className = "helvetica link pa3 ba f2 dib mb2"  style={BKG} href="mailto:service@gwult.ca" >Email: service@gwult.ca</a>
        </div>
    </div>
    )
}

export default MAIN;