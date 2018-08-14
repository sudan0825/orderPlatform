import React, { Component }from 'react';
import myStyle from './contents.css'
import { Route, Switch, withRouter, Redirect} from 'react-router-dom';
import InventoryManagement from './InventoryManagement/InventoryManagement';
import LoadMenu from './LoadMenu/LoadMenu';
import Login from './login/login';
import Signin from './signin/signin';
import CheckOut from './CheckOut/CheckOut';
import Orders from './orders/orders';
import Logout from './Logout/Logout';

import { connect } from 'react-redux';
import * as actionTypes from '../store/actions/index'



class contents extends Component{
    componentWillUpdate(){
        console.log("conetent will update");
        this.props.deleteErrorReport();
    }
 



    render(){
       
        let routes =(
            <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signin} />
            <Route path="/menu" component={LoadMenu}/>      
            <Route path="/" exact component={LoadMenu}/>

            <Redirect to="/" />

            </Switch>
        )
        if(this.props.isAuthenticated){
            console.log("authed")
            routes=(
                <Switch>

                <Route path="/menu" component={LoadMenu}/>
                <Route path="/checkout" component={CheckOut} />
                <Route path="/" exact component={LoadMenu}/>
                <Route path="/orders" component={Orders} />
                <Route path="/inventoryManagement" component={InventoryManagement} />
                <Route path="/logout" component={Logout} />
                <Redirect to="/" />


                </Switch>
            )
        }
     

        return (


            <div className={myStyle.contents}>
            {routes}




            </div>
        )


    }


}

const mapStateToProps = state=>{
    return {
        isAuthenticated:state.authReducer.isAuthed 
    }

}

const mapActionToProps = dispatch=>{
    return {
        deleteErrorReport:()=>dispatch(actionTypes.deleteError())
    }
}

export default withRouter(connect(mapStateToProps,mapActionToProps) (contents))