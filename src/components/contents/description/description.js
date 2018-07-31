import React from 'react';
import myStyle from './description.css'

const description=(props)=>(
    <div className={myStyle.description}>
    <h3>{props.name}</h3>

    <p>{props.description}</p>
    
    <p><b style={{ display:props.inventory==null?'none':'inlineBlock'}}>Price:</b> {props.price}</p>
    
    <p><b style={{ display:props.inventory==null?'none':'inlineBlock'}}>Inventory:</b> {props.inventory}</p>


    </div>)

    export default description;