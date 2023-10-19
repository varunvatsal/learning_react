import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState({})
  let currency = 'usd'
  let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
  useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then((res)=>{setData(res[currency])})
    console.log(data)
  }
  ,[currency])

  return (
    <>
      <div className='container'>
        <div className='from'>
          <input onChange={(e)=>{currency=e.target.value}} placeholder='from' className='from_input' />
          <select name="cars" id="cars_from">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
          </select>

        </div>
        <div className='to'>
          <input placeholder='to' className='to_input' readOnly/>
          <select name="cars" id="cars_to">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
          </select>
        </div>
      </div>
    </>
  )
}

export default App
