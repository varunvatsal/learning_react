import { useState } from 'react'
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
        <ColorButton obj='black' />
      </div>
    </>
  )
}

export default App
