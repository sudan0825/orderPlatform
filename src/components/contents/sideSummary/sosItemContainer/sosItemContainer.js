import React from 'react';
import myStyle from './sosItemContainer.css';


const sosItemContainer = (props)=>{
    return (
        <div className={myStyle.sosItemContainer}>         
        <div className={myStyle.image}><img src={props.image} alt='production pic'/></div>
        <div>
         <h4>{props.name}</h4>
        <input type="number" value={props.number} onChange={props.change}/>
        <button onClick={props.removeFOS}>Remove</button>
        </div>


        </div>

    )
}

export default sosItemContainer;