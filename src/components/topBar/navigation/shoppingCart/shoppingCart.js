import React from 'react';
import myStyle from './shoppingCart.css'

const shoppingCart = (props)=>{
    return (
        <div className={myStyle.shoppingCart}>
        <div className={myStyle.circle}>1</div>
        <div className={myStyle.rect}><a>Cart</a></div>
        </div>
    )
}

export default shoppingCart;