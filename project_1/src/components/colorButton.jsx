import React from "react";
import './colorButton.css'


function ColorButton({obj}){
    console.log(obj)
    const handleChange = ()=>{
        console.log(obj)
        document.body.style.backgroundColor = obj
    }
    return (
        <button onClick={handleChange} style={{'margin': '5px', 'background-color': obj}} className="colorButton">{obj}</button>
    )
}

export default ColorButton