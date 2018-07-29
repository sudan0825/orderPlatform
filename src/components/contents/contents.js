import React, { Component }from 'react';
import myStyle from './contents.css'
import { Route, Switch} from 'react-router-dom';
import InventoryManagement from '../../container/InventoryManagement/InventoryManagement';
import LoadMenu from '../../container/LoadMenu/LoadMenu';
import CheckOut from '../../container/CheckOut/CheckOut';
import Orders from '../../container/orders/Orders';


class contents extends Component{
 state ={
        beers:{},
        totalPrice:0,
        orders:[]

    }


getChildrenProps=(dataFromChild)=>{

    let beers={}, totalPrice=0, orders=[]
    for(let data in dataFromChild){
        if(data==="beers"){
            beers={...dataFromChild[data]}
        }
        if(data==="totalPrice"){
            totalPrice=dataFromChild[data];
        }
        if(data==="orders") orders=[...dataFromChild[data]]
    }
  this.setState({beers:beers,orders:orders,totalPrice:totalPrice})
}


    render(){
     
        
        return (
     

    <div className={myStyle.contents}>

        <Switch>

        <Route path="/Menu" render={(props)=>(<LoadMenu 
                                              getChildrenProps={this.getChildrenProps}
                                              {...props}
                                              />)}/>
         <Route path="/checkout" render={(props)=>(<CheckOut 
                                                  {...this.state}
                                                    {...props}
                                                   />)} />
         <Route path="/" exact render={(props)=>(<LoadMenu 
                                                 getChildrenProps={this.getChildrenProps}
                                                    {...props}
                                                 />)} />
        <Route path="/Orders" component={Orders} />
        <Route path="/InventoryManagement" component={InventoryManagement} />

       </Switch>

 
    </div>
    )


}


}



export default contents;