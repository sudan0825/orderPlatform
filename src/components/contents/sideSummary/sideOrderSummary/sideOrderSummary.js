import React from 'react';
import myStyle from './sideOrderSummary.css';


const sideOrderSummary = (props)=>{
    
    return (
    <div className={myStyle.sideOrderSummary}>
        <h3>Order Summary</h3>
        
        
      {props.children}
        
        <button onClick={props.checkout}>Check Out</button>
       <button onClick={props.continue}>Continue Shopping</button>
         
        </div>
    
    )
}

export default sideOrderSummary;