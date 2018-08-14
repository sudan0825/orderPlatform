import React,{Component} from 'react';
import myStyle from './login.css';

import Input from '../../components/UI/input/input';
import Button from '../../components/UI/buttons/buttons';


import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/index';
import { Redirect } from 'react-router-dom';


class login extends Component{
    state={
        user:{
            username:{
                elemType:'input',
                elemConfig:{
                    type:'email',
                    placeholder:'User name',
                    autoComplete:'email'
                },
                value:'',
                validation:{
                    required:true,
                    email:true
                },
                valid:false,
                touched:false
            },
            password:{
                elemType:'input',
                elemConfig:{
                    type:'password',
                    placeholder:'password',
                    autoComplete:'current-password'
                },
                value:'',
                validation:{
                    required:true,
                    minLength:6,

                },
                valid:false,
                touched:false
            }

        }


    }

login=(event)=>{
    event.preventDefault()
    const data={email:this.state.user.username.value,
                password:this.state.user.password.value,
                isSignUp:true}
    this.props.auth(data);
}

chechValidity=(value,rules)=>{
    if(!rules)return true;
    let isValid=true;
    if(rules.isRequired){
        isValid=value.trim()!==''&&isValid;
    }
    if(rules.minLength){
        isValid=(value.trim().length>=rules.minLength)&&isValid;
    }
    if(rules.isEmail){

    }

    return isValid;
}
inputChangeHandler=(event, id)=>{
   if(this.props.error){
            this.props.deleteError();
    }
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
    let authRedirect =null;
    if(this.props.isAutheticated){
        authRedirect=<Redirect to = {this.props.authRedirectPath}/>
    }

    const formElementArray =[];

    for(let key in this.state.user){
        formElementArray.push({
            id:key,
            config:this.state.user[key]
        });
    }

    let form=(
        <form onSubmit={this.login}>


        {formElementArray.map(elem=>(
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
    <div className={myStyle.btgp}>
        <Button buttonValue="Log in" buttoneType="Submit"></Button>
<Button clickButton={this.cancel} buttonValue="Cancel" ></Button>
</div>


</form>
)

return (
    <div className={myStyle.login}>
    {authRedirect}
    <h1>Log in </h1>
    {form}
    <div style={{color:'red'}}>{this.props.error}</div>
    </div>

)
}

}


const mapStateToProps =state=>{
    return {
        error:state.authReducer.error,
        isAutheticated:state.authReducer.isAuthed,
        authRedirectPath:state.authReducer.redirecPath
    }
}

const mapActionToProps=dispatch=>{
    return {
        auth:(data)=>dispatch(actionTypes.auth(data)),
        deleteError:()=>dispatch(actionTypes.deleteError())
    }
}
export default  connect(mapStateToProps,mapActionToProps)(login);