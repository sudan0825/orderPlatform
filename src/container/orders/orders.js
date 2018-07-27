import React, { Component } from 'react';
import myStyle from './orders.css';
import axios from '../../axios';



class Orders extends Component{


   state={
       orders:[]
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
        if(this.state.orders.length){
           
        }
        return (
            <div className={myStyle.orders}>

            <h1> Orders </h1>
            

            </div>)
            }

     }
export default Orders;
