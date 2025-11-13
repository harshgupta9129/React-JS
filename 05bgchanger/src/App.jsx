import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Box from './components/box.jsx'

function App() {

  return (
    <>
      <div id='bigbox'>
        <Box text='Red' iid ='red'/>
        <Box text='Blue' iid ='blue'/>
        <Box text='Yellow' iid ='Yellow'/>
        <Box text='Greeen' iid ='Green'/>
      </div>
    </>
  )
}

export default App
