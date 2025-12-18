import React, {useState} from 'react'

export default function TextForm(props) {

    const handleupclick = ()=> {
        setText(text.toUpperCase());
        props.showAlert("Successfully Converted into UpperCase","Success")
    }
    
    const handlelowclick = ()=> {
        setText(text.toLowerCase());
        props.showAlert("Successfully Converted into LowerCase","Success")
    }

    const handleclearclick = ()=> {
        setText("");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter Text Here');
    return (
        <>
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} id="exampleFormControlTextarea1" onChange={handleOnChange} rows="8" style={{backgroundColor:(props.mode==='light' ? "white" : "black"), color:(props.mode==='light' ? "black" : "white")}}></textarea>
            <button className={`btn btn.primary mx-2 btn-${(props.mode==='light' ? 'light' : 'dark')}`} onClick={handleupclick} >Covert into UpperCase</button>
            <button className={`btn btn.primary mx-2 btn-${(props.mode==='light' ? 'light' : 'dark')}`} onClick={handlelowclick} >Covert into LowerCase</button>
            <button className={`btn btn.primary mx-2 btn-${(props.mode==='light' ? 'light' : 'dark')}`} onClick={handleclearclick} >Clear Text</button>
            </div>
        </div>
        <div className="container my-3">
            <h1>Your Text Summary</h1>
            <h6>{(text.trim()===''?0:text.trim().split(' ').length)} Words and {text.length} Character</h6>
            <h6>{0.008*text.split(" ").length} minutes required to read</h6>
            <h2>Preview</h2>
            <p>{text}</p>

        </div>
        </>
    )
}