import React, { Component } from 'react';
import myStyle from './LoadMenu.css';
import ItemContainer from '../../components/contents/itemContainer/itemContainer';
import SideOrderSummary from '../../components/contents/sideSummary/sideOrderSummary/sideOrderSummary';
import SosItemContainer from '../../components/contents/sideSummary/sosItemContainer/sosItemContainer';
import Backdrop from '../../components/UI/backDrop/backDrop';

import * as actionTypes from '../../store/actions/index';

import { connect } from 'react-redux';
import axios from '../../axios';





class LoadMenu extends Component {
    state ={
     
        show:false,
      

    }
/* more--> add more beer, less--> decrease the number of order, count-->how many beers are order
   dplus-->disable add button if the number of order reach inventory
   dmin-->disable the minus button& addto the cart button if he number of order is equal to 0*/
componentWillMount(){
    
    this.props.onFetchInventory();

}



//add order to side order summary
addToCart=(order)=>{

   
    this.setState({show:true})


}
removeFromCart=(e,o)=>{
    e.stopPropagation();
    console.log("removeFromCart(e,o)")
    this.props.removeFromCart(o)
}


clickBackDrop=(event)=>{


    this.setState({show:!this.state.show})
}
//continue to check out
checkout=(event)=>{
    //pass the data to parent
    event.stopPropagation();
 this.props.history.push({pathname:'/checkout'});
//pass props children to parent
//    this.props.passToparent(this.state);
   
    //pass value through route
    //    console.log(this.state.totalPrice)
    //      const queryParams = [];
    //        for (let i in this.props.orders) {
    //            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.props.orders[i]));
    //        }
    //        queryParams.push('price=' + this.state.totalPrice);
    //        const queryString = queryParams.join('&');
    //        this.props.history.push({
    //            pathname: '/checkout',
    //            search: '?' + queryString
    //        });

    //this.props.history.replace( '/checkout' )
}

continue=()=>{
    this.setState({show:false})
}

render(){

    const items= [];

    if(this.props.inventory){

        for(let key in this.props.inventory){
             let idKey=this.props.inventory[key].id;
             let item=this.props.inventory[key];
           
         
            items.push( 
                <ItemContainer
                key={idKey}
                price={item.price}
                name={item.name}
                image={item.image}
                description={item.description}
                more={()=>this.props.add(item)}
        less={()=>this.props.remove(item)}
        count={this.props.orders[idKey]?this.props.orders[idKey].count:0}
        dplus={this.props.orders[idKey]?this.props.orders[idKey].disablePlus:false}
        dmin={this.props.orders[idKey]?this.props.orders[idKey].disableMinus:true}
        addToCart={()=>this.addToCart({item})}

    />)
}
}
const orders=[];

if(this.props.orders){
 let orderList=this.props.orders;
    for( let o in orderList){

        orders.push(
            <SosItemContainer 
            key={o}
            name={orderList[o].name}
            image={orderList[o].image}
            number={orderList[o].count}

            removeFromCart={(e)=>this.removeFromCart(e,o)}

                              />
    )  

                              }

}



return (

    <div className={myStyle.LoadMenu}>

    {/*side order summary*/}
    <Backdrop 
    show={this.state.show}
    clickBackDrop={this.clickBackDrop}>
    <SideOrderSummary 
    checkout={this.checkout}
    continue={this.continue}
    >
    {orders}
    </SideOrderSummary>
    </Backdrop>




    <h1>Menu</h1>
    {items}



    </div>)
    }
    }
    
const mapStateToProps = state =>{
    return {
       orders:state.ordersReducer.ordersList,
       totalPrice:state.ordersReducer.totalPrice,
       inventory:state.beersListReducer.inventory
      
    }
    }
    
const mapDispatchToProps = dispatch => {
    return {
    add: (beer)=>dispatch(actionTypes.add(beer)),
    remove: (beer)=>dispatch(actionTypes.remove(beer)),
    onFetchInventory:()=>dispatch (actionTypes.getInventory()),
    removeFromCart:(key)=>dispatch(actionTypes.removeFromCart(key))
    }
    }
export default connect(mapStateToProps, mapDispatchToProps) (LoadMenu,axios);

