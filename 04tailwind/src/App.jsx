import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx';



function App() {

  let myobj = {
    username : "harshgupta",
    age : 21
  }

  let newarr = [1,2,3,4,5];
  return (
    <>

      <h1 className='bg-green-400 p-4 rounded-2xl'>Tailwind CSS</h1>
      <Card name = "harshgupta9129" someobj = {myobj} somearr = {newarr}/>
    </>
  )
}

export default App
