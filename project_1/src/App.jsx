import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ColorButton from './components/colorButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="colorBox">
        <ColorButton obj='red'/>
        <ColorButton obj='yellow'/>
        <ColorButton obj='green'/>
        <ColorButton obj='blue'/>
        <ColorButton obj='violet' />
        <ColorButton obj='purple' />
        <ColorButton obj='pink' />
        <ColorButton obj='brown' />
      </div>
    </>
  )
}

export default App
