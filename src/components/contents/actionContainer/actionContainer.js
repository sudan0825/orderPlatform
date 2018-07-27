import React from 'react';
import myStyle from './actionContainer.css'

const actionContainer=(props)=>(
    <div className={myStyle.actionContainer}>
    <h3>{props.name}</h3>
    
            <p>{props.description}</p>
    <p ><b>Price:</b> {props.price} </p>
    <div className={myStyle.buttonDiv}> 
    <button onClick={props.more} disabled={props.dplus}>{props.plus}</button>
    <div>{props.count}</div>
    <button onClick={props.less} disabled={props.dmin}>{props.minus}</button>
    
    </div>
   <button onClick={props.addToCart} disabled={props.dmin} >Add </button>
                  
   </div>)
    
export default actionContainer;