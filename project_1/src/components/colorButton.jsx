import React from "react";
import './colorButton.css'


function ColorButton(props){
    console.log(props)
    const handleChange = ()=>{
        console.log(props.obj)
        document.body.style.backgroundColor = props.obj
    }
    return (
        <button onClick={handleChange} style={{'margin': '5px', 'background-color': props.obj}} className="colorButton">{props.obj}</button>
    )
}

export default ColorButton