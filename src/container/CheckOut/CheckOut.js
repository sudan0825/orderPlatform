import React, { Component } from "react";
import myStyle from "./CheckOut.css";
import axios from '../../axios';

import Input from '../../components/UI/input/input';
import * as actionTypes from '../../store/actions/index';

import { connect } from 'react-redux';



class OrderSummary extends Component {
    state={
        user:{
            Firstname:{
                elemType:'input',
                elemConfig:{
                    type:'text',
                    placeholder:'First Name',
                    autoComplete:'given-name'
                },
                value:'',
                validation:{

                    wordOnly:true
                },
                valid:false,
                touched:false
            },
            Lastname:{
                elemType:'input',
                elemConfig:{
                    type:'text',
                    placeholder:'Last Name',
                    autoComplete:'family-name'

                },
                value:'',
                validation:{

                    wordOnly:true
                },
                valid:false,
                touched:false
            } ,
            Address:{
                elemType:'input',
                elemConfig:{
                    type:'text',
                    placeholder:'Address. ',
                    autoComplete:'email'
                },
                value:'',
                validation:{
                    required:true,
                
                },
                valid:false,
                touched:false
            },
            City:{
                elemType:'input',
                elemConfig:{
                    type:'text',
                    placeholder:'City',
                    autoComplete:'City'
                },
                value:'',
                validation:{
                    required:true,

                },
                valid:false,
                touched:false
            },
            State:{
                elemType:'select',
                elemConfig:{
                    type:'text',
                    placeholder:'State',
                    autoComplete:'State',
                    option:['AA','AE','CA','CO','MI','ME','NY']
                },
                value:'CA',
                validation:{
                    required:true,
                   
                },
                valid:false,
                touched:false
            },
            Zip:{
                elemType:'input',
                elemConfig:{
                    type:'text',
                    placeholder:'Zip',
                    autoComplete:'Zip'
                },
                value:'',
                validation:{
                    required:true,

                },
                valid:false,
                touched:false
            }

        },
        allrequired:"All fields are required"



    }


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
  
    if(Object.keys(this.props.orders).length===0)
        return
    this.props.checkout(o,p);
    alert("order sucessfully!")
    this.props.history.push('/');

}
chechValidity(value,rules){
  if(!rules)
    return true;
    let isValid=true;
    if(rules.isRequired){
        isValid=value.trim()!==''&&isValid;
    }
    return isValid;
}
inputChangeHandler=(event, id)=>{

    const updateState={
        ...this.state.user,
        [id]:{
            ...this.state.user[id],
            value:event.target.value,
           
            touched:true,
            valid:this.chechValidity(event.target.value,this.state.user[id].validation)
        }   
    }
  

    this.setState({user:updateState});
   
}

render(){

    const formArray=[];


    for(let key in this.state.user){
        formArray.push({
            id:key,
            config:this.state.user[key]
        });
    }

    let form=(
        <form onSubmit={this.login}>


        {formArray.map(elem=>(
        <Input key={elem.id}
        elemType={elem.config.elemType}
        elemConfig={elem.config.elemConfig}
        value={elem.config.value}
        invalid={!elem.config.valid}
        shouldValidate={elem.config.validation}
        touched={elem.config.touched}
        label={elem.id}

        changed={(event)=>this.inputChangeHandler(event, elem.id)} 

/>

))}

    </form>
)


let items=[];
if(this.props.orders){
    let orders=this.props.orders;
    for(let o in orders){
        items.push(<p key={o}><span > Name: </span> {orders[o].name} x {orders[o].count}</p>)
    }


}

return ( <div className={myStyle.checkOut}>
        <h2>Check Out</h2>
        <div className={myStyle.checkoutdiv}>
        <div>
        {items}

        <p> <span> Total Price: </span> {this.props.totalPrice.toFixed(2)}</p>
        </div>
        {form}

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