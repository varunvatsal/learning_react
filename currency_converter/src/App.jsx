import { useState, useEffect, useCallback } from 'react'
import './App.css'

function App() {
  const [currency, setCurrency] = useState('usd')
  const [currencyTo, setCurrencyTo ] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [amount, setamount] = useState(0)
  const [data, setData] = useState({})
  useEffect(()=>{
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
    .then(res=>res.json())
    .then((res)=>{setData(res[currency])})
    console.log(`request made and reply received ${currency}`)
    console.log(data)
    setConvertedAmount(0)
  }
  ,[currency])
  const handleChange = function(){
    setConvertedAmount(amount*Number(data[currencyTo]))
    console.log(amount*Number(data[currencyTo]))
    console.log('pp')
  }
  return (
    <>
    <div id='box'>
      <div className='container'>
        <div className='from'>
          <input onChange={(e)=>{setamount(Number(e.target.value))}} placeholder='from' className='from_input' />
          <select name="currrency" id="currency_from" onChange={(e)=>{setCurrency(e.target.value)}}>
          <option value="usd">usd</option>
          <option value="inr">inr</option>
          <option value="eur">eur</option>
          <option value="xmr">xmr</option>
          </select>

        </div>
        <div className='to'>
          <input placeholder='to' className='to_input' value={convertedAmount} readOnly/>
          <select name="currency" id="currency_to" onChange={(e)=>{setCurrencyTo(e.target.value)}}>
          <option value="usd">usd</option>
          <option value="inr">inr</option>
          <option value="eur">eur</option>
          <option value="xmr">xmr</option>
          </select>
        </div>
      </div>
      <div>
        <button id="convert_button" onClick={handleChange}>Convert</button>
      </div>
      </div>
    </>
  )
}

export default App
