import React from 'react';


const description=(props)=>(
    <div>
    <h4>{props.name}</h4>

    <p>{props.description}</p>
    
    <p><b>Price: $ {props.price}</b> </p>
    
    <p><b style={{ display:props.inventory==null?'none':'inlineBlock'}}>Inventory:</b> {props.inventory}</p>


    </div>)

    export default description;