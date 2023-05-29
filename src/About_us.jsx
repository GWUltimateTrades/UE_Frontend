import STD_text from "./STD_text";

const About_us = () => {

    const title = "About Us"
    const body = "Here at GW Ultimate Trades, we offer electrical contracting for residential, industrial and commercial applications. Our highly experienced team provides the utmost in service to ensure an excellent experience."
    
    return (
        <STD_text body = {body} font = "georgia"></STD_text>
    )
}

export default About_us;