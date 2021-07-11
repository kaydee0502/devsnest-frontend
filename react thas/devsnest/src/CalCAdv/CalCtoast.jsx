import React from "react";
import "./calctoast.css";

function Calctoast(props){

    const COLOR = props.calories >= 200 ? "red" : props.calories >= 120 ? "yellow" : "green" 
 return(


    <div className = "box">
        <div className = "indicator" style= {{backgroundColor : COLOR}}></div>

        <div className = "content">
        <h2>{props.item}</h2>
        <p>Worth <strong>{props.price}</strong> bucks.</p>
        <p>Has <strong style={{color:COLOR}}>{props.calories}</strong> calories.</p>
        {props.calories >= 200 && <div style={{color:COLOR}}> High in calories!</div>}
        </div>
        
    </div>

 )
}

export default Calctoast