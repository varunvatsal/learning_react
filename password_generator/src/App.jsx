import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(8)
  const [password, setPassword] = useState("")
  const [number, setNumber] = useState(false)
  const [character, serCharecter] = useState(false)

  const passwordGeneretor = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number) str+='0123456789'
    if(character) str+='!@#$%^&*()_+~'
    for(let i=0; i<count; i++){
      let char = Math.floor(Math.random()*str.length)
      pass += str[char] 
    }
    setPassword(pass)
  }, [count, number, character, setPassword])


  return (
    <>
      <div className='body_0'>
        <div>
        <input placeholder='password' className='passwordInput' value={password} readOnly/>
        <button>copy</button>
        </div>
        <div>
        <input type='range' value={count}/>
        <label>{count}</label>
        </div>
      </div>
    </>
  )
}

export default App
