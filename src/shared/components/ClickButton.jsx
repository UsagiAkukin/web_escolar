import React from "react"

const ClickButton = (props) => {

    const {text, onClick, color} = props
   
    return(
        <div>
           <button onClick={onClick} style={color}>{text}</button> 
        </div>
    )
}

export default ClickButton