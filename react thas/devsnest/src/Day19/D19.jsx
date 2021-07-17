
import React, {useState} from "react";
import './D19.css';

function D19() {
 // use 4 usestates to simulate 4 different states
 const [state1, setState1] = useState(0);
 const [state2, setState2] = useState(0);
 const [state3, setState3] = useState(0);
 const [state4, setState4] = useState(0);
return (
 <div className="App">
     <div className="container-d19">
        <header>
            <h1>Counter</h1>
        </header>



     <div className="counter-container">
        <div className="counter">
            
            <button className="add" onClick={() => setState1(state1+1)}>+</button>
            {state1}
            <button className="subtract" disabled={state1===0} onClick={()=>{if(state1>0) setState1(state1-1)}}>-</button>
        </div>

 


        <div className="counter">
            
            <button className="add" onClick={() => setState2(state2+1)}>+</button>
            {state2}
            <button className="subtract" disabled={state2===0} onClick={()=>{if(state2>0) setState2(state2-1)}}>-</button>
        </div>



    
        <div className="counter">
            
            <button className="add" onClick={() => setState3(state3+1)}>+</button>
            {state3}
            <button className="subtract" disabled={state3===0} onClick={()=>{if(state3>0) setState3(state3-1)}}>-</button>
        </div>

        <div className="counter">
            
            <button className="add" onClick={() => setState4(state4+1)}>+</button>
            {state4}
            <button className="subtract" disabled={state4===0} onClick={()=>{if(state4>0) setState4(state4-1)}}>-</button>
        </div>
   

     </div>

 </div>
</div>


)
}

export default D19;