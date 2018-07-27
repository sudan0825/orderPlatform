import React, {Component} from 'react';
import myStyle from './shoppingCart.css'

class shoppingCart extends Component {
    
showOrderSummary=()=>{
    
}
    
    render(){
         return (
        <div className={myStyle.shoppingCart}>
        <div className={myStyle.circle}>1</div>
        <div className={myStyle.rect} onClick={this.showOrderSummary}><a>Cart</a></div>
        </div>
    )
    }

}

export default shoppingCart;