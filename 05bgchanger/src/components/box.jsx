import './box.css'



function Box(props) {
    function changeWholeBackground(color) {
        document.body.style.backgroundColor = color;
    }
    return (
        <>
            <button 
                id={props.iid}
                style={{backgroundColor : props.iid}} 
                onClick={() => changeWholeBackground(props.iid)}
            >
                {props.text}
            </button>
        </>
    )
}

export default Box