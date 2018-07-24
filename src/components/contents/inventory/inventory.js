import React from 'react';
import myStyle from './inventory.css';

const inventory = (props)=>{
    return (
    <div className={myStyle.inventory}>
        {/*product informaton*/}
           <div className={myStyle.leftImg}>
     
             <div>{props.img}</div>
     
          </div>
     <div className={myStyle.rightInfo}>
    
     <div><b></b> {props.name}</div>
       <div>{props.description}</div>
      <div> ${props.price}</div>
   
    </div>
    </div>
    
    )
}

export default inventory;