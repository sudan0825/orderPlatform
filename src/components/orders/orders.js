import React from 'react';
import myStyle from './orders.css';

const orders = (props)=>{
    
   let order=[];
    order=props.orderContent.map((o,i)=>{
        
        return ( <p
                key={i}>
               {o.name} x {o.count}
                </p>
              
                )
    })
    return (
    <div className={myStyle.orders}>
        <h3>{props.date}</h3>
          {order}
        <p>Total Price: {props.price}</p>
        
        
    </div>
    
    )
}

export default orders;