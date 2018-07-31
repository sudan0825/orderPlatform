import React, { Component } from 'react';
import myStyle from './orders.css';
import OrderItem from '../../components/orders/orders'
import axios from '../../axios';



class Orders extends Component{


    state={
        orders:{}
    }
componentWillMount(){


    axios.get('/orders.json').then((res)=>{

        this.setState({orders:res.data})

    }).catch(e=>{
        console.log("cannot get orders")
        console.log(e)
    })

}
render(){
    let dateOrder=[];
    
    if(this.state.orders){

        for(let order in this.state.orders){
            let date=new Date(this.state.orders[order][2])
            let time=date.getMonth()+1+"/"+date.getDate()+
                     "/"+date.getFullYear();
         
                     
            
                       dateOrder.push(<OrderItem 
                          key = {order[2]}
                          date={time}
                          orderContent={this.state.orders[order][0]}
                          price={this.state.orders[order][1]}
                         
                         />)
        }

    }        

    return (
        <div className={myStyle.orders}>

        <h1> Orders </h1>

        {dateOrder}



        </div>)
        }

        }
        export default Orders;
