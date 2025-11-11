import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function Myapp() {
  return (
    <h1>Hello World</h1>
  )
}

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const reactElement = React.createElement(
  'a',
  {
    href : 'https://google.com',
    target : "_black"
  },
  'click Me To Open Google.com'
)

createRoot(document.getElementById('root')).render(
  <>
    <App/>
    <Myapp/>
    {anotherElement}
    <br></br>
    {reactElement}
  </>
)