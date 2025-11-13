import { useState } from 'react'
import './App.css'

function Box (props) {
  const [bgcolor, setbgcolor] = useState("");
  document.body.style.backgroundColor = bgcolor;

  return (
    <button 
      style={{background : props.color}}
      onClick={()=>setbgcolor(props.color)}
    >
      {props.text}
    </button>
  )
}

function App() {

  return (
    <>
      <div id='bigbox'>
        <Box text='Red' color='red' />
        <Box text='Blue' color='blue' />
        <Box text='Yellow' color='yellow' />
        <Box text='Green' color='green' />
        <Box text='Pink' color='pink' />
        <Box text='Purple' color='purple' />
        <Box text='Orange' color='orange' />
        <Box text='Black' color='black' />
      </div>
    </>
  )
}


export default App
