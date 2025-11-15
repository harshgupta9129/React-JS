import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [length, setlength] = useState(8);
  const [numallow, setnumallow] = useState(false);
  const [charallow, setcharallow] = useState(false);
  const [password, setpassword] = useState("");
  const [copied, setcopied] = useState(false);

  // useRef

  const passref = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrtuvwxyz";
    if (numallow) str+="0123456789";
    if (charallow) str+="!@#$%^&*()-_{[}]:;',<.>/?~`";
    for (let i=0; i<length; i++) {
      pass+=str[Math.floor(Math.random()*str.length)];
    }
    setpassword(pass);

  }, [length, numallow, charallow, setpassword])

  const copyPasswordtoclip = useCallback(()=>{
    window.navigator.clipboard.writeText(password);
    setcopied(true);
    passref.current?.select();

    setTimeout(() => {
      setcopied(false);
    }, 2000);
  },[password])

  useEffect(() => {
    passwordGenerator()
  },[length, numallow, charallow]);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly ref={passref}/>
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer ' onClick={copyPasswordtoclip}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={100} value={length} className='curson-pointer' onChange={(e)=>{setlength(e.target.value)}}/>
            <label>Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" value={numallow} className='cursor-pointer' onChange={()=>setnumallow(prev => !prev)}/>
            <label>Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" value={charallow} className='cursor-pointer' onChange={()=>{setcharallow(prev => !prev)}}/>
            <label>Character</label>
          </div>
        </div>
      </div>
      {copied && (
        <div className="bg-green-600 text-white px-3 py-1 mt-2 rounded-md text-center">
          Copied!
        </div>
      )}
    </>
  )
}

export default App
