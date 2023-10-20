import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [currency, setCurrency] = useState('usd')
  const [amount, setamount] = useState(0)
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [data, setData] = useState({})
  useEffect(()=>{
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
    .then(res=>res.json())
    .then((res)=>{setData(res[currency])})
  }
  ,[currency])

  return (
    <>
      <div className='container'>
        <div className='from'>
          <input onChange={(e)=>{setamount(e.target.value)}} placeholder='from' className='from_input' />
          <select name="currrency" id="currency_from" onChange={(e)=>{setCurrency(e.target.value)}}>
          <option value="usd">usd</option>
          <option value="inr">inr</option>
          <option value="eur">eur</option>
          <option value="xmr">xmr</option>
          </select>

        </div>
        <div className='to'>
          <input placeholder='to' className='to_input' value={convertedAmount} readOnly/>
          <select name="currency" id="currency_to" onChange={(e)=>{setConvertedAmount(amount*(data.e.target.value))}}>
          <option value="usd">usd</option>
          <option value="inr">inr</option>
          <option value="eur">eur</option>
          <option value="xmr">xmr</option>
          </select>
        </div>
      </div>
    </>
  )
}

export default App
