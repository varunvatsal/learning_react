import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  

  const addValue = ()=>{
    if(counter<20){
    console.log(`previous counter value: ${counter}, new counter value: ${counter+1}` )
    setCounter(counter + 1)
    }
    else{
      console.log("counter greater than 20 not allowed")
    }
  }
  const subValue = ()=>{
    if(counter>0){
      console.log(`previous counter value: ${counter}, new counter value: ${counter-1}`)
      setCounter(counter - 1)
    }
    else{
      console.log("counter less than zero not allowed")
    }
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
