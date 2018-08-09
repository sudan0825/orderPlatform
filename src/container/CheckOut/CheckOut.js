import React, { Component } from "react";
import myStyle from "./CheckOut.css";
import axios from '../../axios';

import * as actionTypes from '../../store/actions/index';

import { connect } from 'react-redux';



class OrderSummary extends Component {



componentWillMount(){
  console.log(this.props.orders)
}

//cancel order
cancel=()=>{
    
   this.props.cancelCheckOut();
    console.log('check out to cancel')
   this.props.history.push('/')
}

checkOut=(o,p)=>{
    this.props.checkout(o,p);
    this.props.history.push('/');
}

render(){
    
    
 let items=[]
  if(this.props.orders){
     let orders=this.props.orders;
      for(let o in orders){
          items.push(<p key={o}><span > Name: </span> {orders[o].name} x {orders[o].count}</p>)
      }
      
     
  }
                       
    return ( <div className={myStyle.checkOut}>
            <h2>Check Out</h2>
           <div className={myStyle.checkoutdiv}>
            {items}
           <p> <span> Total Price: </span> {this.props.totalPrice.toFixed(2)}</p>
            </div>
            <button onClick={()=>this.checkOut(this.props.orders,this.props.totalPrice)}>Check Out</button>
            <button onClick={this.cancel}>Cancel</button>
            
            </div>
            
           )
            }
            }
 const mapStateToProps = state =>{
    return {
       orders:state.ordersReducer.ordersList,
       totalPrice:state.ordersReducer.totalPrice
      
    }
    }
    
const mapDispatchToProps = dispatch => {
    return {
    cancelCheckOut: ()=>dispatch(actionTypes.cancelCheckOut()),
    checkout:(order,price)=>dispatch(actionTypes.checkout(order,price))
 
    }
    }
      
 export default connect(mapStateToProps,mapDispatchToProps)(OrderSummary,axios);