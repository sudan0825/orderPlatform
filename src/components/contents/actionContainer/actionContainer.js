import React from 'react';
import myStyle from './actionContainer.css'

const actionContainer=(props)=>(
    <div className={myStyle.actionContainer}>
    <h3>{props.name}</h3>
    
            <p>{props.description}</p>
    <p ><b>Price:</b> {props.price} </p>
    <button>{props.plus}</button>
    <button>{props.minus}</button>
                  
   </div>)
    
export default actionContainer;