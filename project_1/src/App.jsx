import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ColorButton from './components/colorButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <ColorButton obj='red'/>
        <ColorButton obj='yellow'/>
        <ColorButton obj='green'/>
        <ColorButton obj='blue'/>
      </div>
    </>
  )
}

export default App
