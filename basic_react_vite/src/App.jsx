import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'

function App() {
  let [counter, setCounter] = useState(0)
  let userName = {
    name:'varun vatsal',
    age: '20'
  }

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
    if(counter>-5){
      console.log(`previous counter value: ${counter}, new counter value: ${counter-1}`)
      setCounter(counter - 1)
    }
    else{
      console.log("counter less than zero not allowed")
    }
  }

  return (
    <>
          <h1>counter using useState</h1>
          <h2>counter value: {counter}</h2>
          <button id='increment' onClick={addValue}>increment</button>
          <button id='decrement' onClick={subValue}>decrement</button>
          <Card obj={userName}/>
    </>
  )
}

export default App
