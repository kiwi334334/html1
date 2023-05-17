import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id='wrapper'className='bg-sky-300 w-screen h-screen' >
        <img src={reactLogo} alt='react logo'/>
      </div>
    </>
  )
}

export default App
