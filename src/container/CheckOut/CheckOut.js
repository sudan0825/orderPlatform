import React, { Component } from "react";
import myStyle from "./CheckOut.css";
import axios from '../../axios';



class OrderSummary extends Component {

    state ={
        beers:{},
        totalPrice:0,
        orders:[],
       

    }

componentWillMount(){
    let beers={}, totalPrice=0, orders=[]
    for(let data in this.props){
        if(data==="beers"){
            beers={...this.props[data]}
        }
        if(data==="totalPrice"){
            totalPrice=this.props[data];
        }
        if(data==="orders") orders=[...this.props[data]]
    }
    this.setState({beers:beers,orders:orders,totalPrice:totalPrice})
}

//cancel order
cancel=()=>{
   let resetstate={
        beers:{},
        totalPrice:0,
        orders:[]

    }
   console.log(this.state);
   this.setState({beers:resetstate.beers,totalPrice:resetstate.totalPrice,orders:resetstate.orders})
    console.log(this.state);
   this.props.history.push('/')
}

//check out & store everything
checkout=()=>{
  
 
    let orders=[this.state.orders,this.state.totalPrice.toFixed(2),new Date()]
    
    axios.post('/orders.json', orders).then((res)=>{
        console.log("post order to firebase database")
         this.props.history.push('/');
    }).catch(e=>{
        console.log("something wrong when post order to firebase")
        console.log(e)
    })
    let inventoryList={...this.state.beers};
    let ordersList=[...this.state.orders];
    for(let beer in inventoryList){
        for(let i in ordersList){
          if(inventoryList[beer].name===ordersList[i].name) {
              
              inventoryList[beer].inventory-=ordersList[i].count;
              console.log(  inventoryList[beer].inventory)
              axios.patch('/inventory/'+beer+'.json',{inventory:inventoryList[beer].inventory}).then((res)=>{
                  console.log("Make order successfully and update inventory accordingly ");
                  console.log(res)
              }).catch(e=>{
                  console.log(e)
              })
              
          } 
        }
        
    }

}
render(){
       console.log(this.state.beers);
       console.log(this.state.orders);
       console.log(this.state.totalPrice);
    
 let items=[]
  if(this.state.orders.length){
     
      items=this.state.orders.map(order=>
          (<p key={order.name}><span > Name: </span> {order.name} x {order.count}</p>)
      )
     
  }
                       
    return ( <div className={myStyle.checkOut}>
            <h2>Check Out</h2>
           <div className={myStyle.checkoutdiv}>
            {items}
           <p> <span> Total Price: </span> {this.state.totalPrice.toFixed(2)}</p>
            </div>
            <button onClick={this.checkout}>Check Out</button>
            <button onClick={this.cancel}>Cancel</button>
            
            </div>
            
           )
            }
            }

            export default OrderSummary;