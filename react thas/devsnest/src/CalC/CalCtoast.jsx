import React from "react";
import "./calctoast.css";

function Calctoast(props){
 return(
    <div className = "box">
        <h4>{props.item}</h4>
        <p>Worth <strong>{props.price}</strong> bucks.</p>
        <p>Has <strong>{props.calories}</strong> calories.</p>
    </div>

 )
}

export default Calctoast