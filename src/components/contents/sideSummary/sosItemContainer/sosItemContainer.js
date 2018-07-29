import React from 'react';
import myStyle from './sosItemContainer.css';


const sosItemContainer = (props)=>{
    return (
        <div className={myStyle.sosItemContainer}>         
        <div className={myStyle.image}><img src={props.image} alt='production pic'/></div>
        <div>
         <h4>{props.name}</h4>
        <p>Bottles: {props.number}</p>
        <button onClick={(e)=>props.removeFOS(e)}>Remove</button>
        </div>


        </div>

    )
}

export default sosItemContainer;