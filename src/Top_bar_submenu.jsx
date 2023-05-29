const Top_bar_submenu = (props) => (
    <div>
        <div className = {`${props.color} flex justify-center items-start pa1`}>
            <div className = {`pa2 ${props.font} fw6 w-25`}>CONTRACTING</div>
            <div className = {`pa2 ${props.font} fw6 w-25`}>SERVICE</div>
            <div className = {`pa2 ${props.font} fw6 w-25`}>CAREER</div>
            <div className = {`pa2 ${props.font} fw6 w-25`}>TRAINING CENTER</div>
        </div>
    </div>
)

export default Top_bar_submenu;