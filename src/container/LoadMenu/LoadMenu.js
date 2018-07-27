import React, { Component } from 'react';
import myStyle from './LoadMenu.css';
import ItemContainer from '../../components/contents/itemContainer/itemContainer';
import SideOrderSummary from '../../components/contents/sideSummary/sideOrderSummary/sideOrderSummary';
import SosItemContainer from '../../components/contents/sideSummary/sosItemContainer/sosItemContainer';
import Backdrop from '../../components/UI/backDrop/backDrop';
import OrderSummary from '../OrderSummary/OrderSummary';

import axios from '../../axios';
import { Route } from 'react-router-dom';




class LoadMenu extends Component {
    state ={
        beers:{},
        totalPrice:0,
        totalNumber:0,
        show:false,
        orders:[]

    }
componentWillMount(){
    axios.get('/inventory.json').then(res=>{

        let inventory=res.data;
        for (let item in inventory){
            inventory[item].count=0;
            inventory[item].disablePlus=false;
            inventory[item].disableMinus=true;
        }
        this.setState({beers:inventory})

    }).catch(error=>{
        console.log(error.message)
    })
}

componentDidMount(){

}

//add a beer to order
add=(key)=>{
    let cost=0;
    let UpdatedOrder={
        ...this.state.beers
    }
    const orderItem={
        ...UpdatedOrder[key]
    }

    if(orderItem.count<orderItem.inventory){

        orderItem.count+=1; 
    
        cost+=orderItem.price;
    }

    if(orderItem.count===Number(orderItem.inventory)){

        orderItem.disablePlus=true;  
    } 
    if(orderItem.count>0)   orderItem.disableMinus=false;
    UpdatedOrder[key]=orderItem;
    this.setState({beers:UpdatedOrder,totalPrice:this.state.totalPrice+cost});


}
//reduce a beer from the order
minus=(key)=>{
    let cost=0;
    let UpdatedOrder={
        ...this.state.beers
    }
    const orderItem={
        ...UpdatedOrder[key]
    }

    if(orderItem.count>0){
        orderItem.count-=1; 
       
        cost-=orderItem.price;
    }
    if(orderItem.count<orderItem.inventory) orderItem.disablePlus=false;
    if(orderItem.count===0)orderItem.disableMinus=true;

    UpdatedOrder[key]=orderItem;
    this.setState({beers:UpdatedOrder,totalPrice:this.state.totalPrice+cost});
    console.log(this.state.totalNumber);
}



//add order to side order summary
addToCart=(order)=>{

    let copyOfOldOrder=[...this.state.orders]
    //check is the beer ordered before or not
    let flag=copyOfOldOrder.some(o=>{
        if(o.name===order.name){
            o.count=order.count;

        }
        return o.name===order.name
    })
    if(!flag){
        let updatedOrders={
            name:"",
            count:0,
            image:"",
            date:""
        }
        for (let key in updatedOrders){
            if(key==="date"){
                updatedOrders[key]=new Date();
            }else{
                updatedOrders[key]=order[key] 
            }

        }
        copyOfOldOrder=copyOfOldOrder.concat(updatedOrders);
    }




    this.setState({orders:copyOfOldOrder, show:true})


}


removeFOS=(i)=>{

    let changeOrders=[...this.state.orders];

    let changeBeers={...this.state.beers};

    //if remove a beer from side order summary, set the number of count to 0;
    for(let key in changeBeers){
        changeBeers[key].name;
        if(changeBeers[key].name==changeOrders[i].name){  
            changeBeers[key].count=0;
            changeBeers[key].disableMinus=true;
            break;
        }
    }

    changeOrders.splice(i,1);
    if(changeOrders.length===0){
        this.setState({show:false})
    }
    this.setState({orders:changeOrders,beers:changeBeers})
    console.log(this.state.beers)
}
//change the input number in side order summary
changeNumber=()=>{

}
//continue to check out
checkout=()=>{
    
      const queryParams = [];
        for (let i in this.state.orders) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.orders[i]));
        }
        queryParams.push('price=' + this.state.totalPrice);
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        });
      
    //this.props.history.replace( '/checkout' )
}

continue=()=>{
    this.setState({show:false})
}
render(){

    const items= [];
 {/* more--> add more beer, less--> decrease the number of order, count-->how many beers are order
   dplus-->disable add button if the number of order reach inventory
   dmin-->disable the minus button& addto the cart button if he number of order is equal to 0*/}
    if(this.state.beers){

        for(let key in this.state.beers){

            items.push( 
                <ItemContainer
                key={this.state.beers[key].name}
                price={this.state.beers[key].price}
                name={this.state.beers[key].name}
                image={this.state.beers[key].image}
                description={this.state.beers[key].description}
                more={()=>this.add(key)}
        less={()=>this.minus(key)}
        count={this.state.beers[key].count}
        dplus={this.state.beers[key].disablePlus}
        dmin={this.state.beers[key].disableMinus}
        addToCart={()=>this.addToCart({...this.state.beers[key]})}
    />)
}
}
const orders=[];

if(this.state.orders.length){

    this.state.orders.forEach((order,i)=>{

        orders.push(
            <SosItemContainer 
            key={i}
            name={order.name}
            image={order.image}
            number={order.count}
            change={this.changeNumber}
            removeFOS={()=>this.removeFOS(i)}

                              />)  

                              })

}



return (

    <div className={myStyle.LoadMenu}>

    {/*side order summary*/}
    <Backdrop show={this.state.show}>
    <SideOrderSummary 
    checkout={this.checkout}
    continue={this.continue}>
    {orders}
    </SideOrderSummary>
    </Backdrop>
    {/*set route to component*/}

    <Route

    path='/checkout'
    render={(props)=>(
    <OrderSummary 
    orders={this.state.orders} 
    price={this.state.totalPrice} 
    {...props}/>


)}
/>    

<h1>Menu</h1>
{items}



</div>)
}
}
export default LoadMenu;