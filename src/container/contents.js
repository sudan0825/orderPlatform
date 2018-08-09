import React, { Component }from 'react';
import myStyle from './contents.css'
import { Route, Switch} from 'react-router-dom';
import InventoryManagement from './InventoryManagement/InventoryManagement';
import LoadMenu from './LoadMenu/LoadMenu';
import Login from './login/login';
import Signin from './signin/signin';
import CheckOut from './CheckOut/CheckOut';
import Orders from './orders/orders';




class contents extends Component{



    render(){
     
        
        return (
     

    <div className={myStyle.contents}>

        <Switch>

        <Route path="/Menu" component={LoadMenu}/>
         <Route path="/checkout" component={CheckOut} />
         <Route path="/" exact component={LoadMenu}/>
        <Route path="/Orders" component={Orders} />
        <Route path="/InventoryManagement" component={InventoryManagement} />
        <Route path="/Login" component={Login} />
        <Route path="/Signin" component={Signin} />

       </Switch>

 
    </div>
    )


}


}



export default contents;