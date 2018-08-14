import React, { Component } from 'react';
import myStyle from './orders.css';
import OrderItem from '../../components/orders/orders'
import axios from '../../axios';



class Orders extends Component{


    state={
        orders:{},
        theDate:""
    }
   

constructor(props){
    super(props);
    this.orderDate=React.createRef();
}

componentWillMount(){


    axios.get('/orders.json').then((res)=>{

        this.setState({orders:res.data})

    }).catch(e=>{
        console.log("cannot get orders")
        console.log(e)
    })

}
allOrders=()=>{
     this.setState({theDate:""})
   
}
getOrderOfDate=()=>{

    let ymr=this.orderDate.current.value.split('-');
  console.log(ymr)
    if (ymr.length===3){
        this.setState({theDate: ymr[1]+"/"+ymr[2]+"/"+ymr[0] })
    return ymr[1]+"/"+ymr[2]+"/"+ymr[0] 
    }else return null;
                      
        
    
}
render(){
    

    let dateOrder=[];

    if(this.state.orders){

        for(let order in this.state.orders){
            let date=new Date(this.state.orders[order][2])
            let m=Number(date.getMonth())+1;
            let d=Number(date.getDate());

            m=m/10>=1?m:'0'+m;
            d=d/10>=1?d:'0'+d;

            let time=m+"/"+d+"/"+date.getFullYear();
           
            let whichDate;
            if(this.state.theDate){
                whichDate=this.state.theDate===time;
            }else{
                whichDate=true}
            
        

            if(whichDate){
               
                dateOrder.push(<OrderItem 
                               key = {date.getTime()}
            date={time}
            orderContent={this.state.orders[order][0]}
            price={this.state.orders[order][1].toFixed(2)}

            />)


        }
}
}        

return (
    <div className={myStyle.orders}>

    <h1> Orders </h1>
    <div>
    <b>Choose a day </b><input type="date" ref={this.orderDate} onChange={this.getOrderOfDate}/>
    <b>OR</b> <button onClick={this.allOrders}>Show All</button>

    </div>
    <div className={myStyle.ordersList}>
    {dateOrder}

    </div>

    </div>)
    }

    }
    export default Orders;
