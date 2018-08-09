import React from 'react';
import myStyle from './orders.css';

const orders = (props)=>{
    
   let order=[];
    if(props.orderContent){
        let orderContent=props.orderContent;
        for(let o in orderContent){
            order.push(<p
                       key={o}>
                       {orderContent[o].name} x {orderContent[o].count}
                       </p>)
        }
    }
//    order=props.orderContent.map((o,i)=>{
//        
//        return ( <p
//                key={i}>
//               {o.name} x {o.count}
//                </p>
//              
//                )
//    })
    return (
    <div className={myStyle.orders}>
        <h3>{props.date}</h3>
          {order}
        <p>Total Price: {props.price}</p>
        
        
    </div>
    
    )
}

export default orders;