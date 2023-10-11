import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let counter = 5;

  const addValue = ()=>{
    console.log("value added", Math.floor(Math.random()*10) )
    counter = counter + 1; 
  }
  const subValue = ()=>{
    console.log("value subtracted", Math.floor(Math.random()*100))
  }

  return (
    <>
          <h1>hello varun, vite</h1>
          <h2>counter value: {counter}</h2>
          <button id='increment' onClick={addValue}>increment</button>
          <button id='decrement' onClick={subValue}>decrement</button>
    </>
  )
}

export default App
