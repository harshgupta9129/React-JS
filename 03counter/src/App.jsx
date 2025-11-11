import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setcounter] = useState(15);

  const addvalue = () => {
    counter++;
    if (counter > 20) counter--;
    setcounter(counter);
  }

  const removevalue = () => {
    counter--;
    if (counter < 0) counter++;
    setcounter(counter);
  }

  return (
    <>
      <h1>Rockstar</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addvalue}>Add Value {counter}</button>
      <br></br>
      <button onClick={removevalue}>remove value {counter}</button>
    </>
  )
}

export default App
