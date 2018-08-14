import React,{Component} from 'react';
import myStyle from './signin.css';


import Input from '../../components/UI/input/input';
import Button from '../../components/UI/buttons/buttons';


import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/index';
import { Redirect } from 'react-router-dom';

class signin extends Component{
    state={
        user:{
            firstname:{
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
            lastname:{
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
            email:{
                elemType:'input',
                elemConfig:{
                    type:'email',
                    placeholder:'Email address. It will be the username for you',
                    autoComplete:'email'
                },
                value:'',
                validation:{
                    required:true,
                    isEmail:true
                },
                valid:false,
                touched:false
            },
            password:{
                elemType:'input',
                elemConfig:{
                    type:'password',
                    placeholder:'password',
                    autoComplete:'off'
                },
                value:'',
                validation:{
                    required:true,
                    isPassword:true
                },
                valid:false,
                touched:false
            }

        }



    }
signup=(event)=>{
    event.preventDefault();
    let data={email:this.state.user.email.value,
              password:this.state.user.password.value,
              firstname:this.state.user.firstname.value, 
              lastname:this.state.user.lastname.value,
              isSignUp:false
             }
    this.props.auth(data)
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
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test( value ) && isValid
    }
    if(rules.isPassword){
        var mediumRegex = new RegExp('^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&]))');

        isValid=mediumRegex.test(value)&isValid;
    }

    if(rules.wordOnly){
        const pattern=/^\w+$/g;

        isValid=pattern.test(value)&&isValid;

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
    if(this.props.error){
            this.props.deleteError();
    }

    this.setState({user:updateState});
}

render(){
    let authRedirect =null;
    if(this.props.isAutheticated){
        authRedirect=<Redirect to = {this.props.authRedirectPath} />
    }
    const formElementArray =[];

    for(let key in this.state.user){
        formElementArray.push({
            id:key,
            config:this.state.user[key]
        });
    }

    let form=(
        <form onSubmit={this.signup}>


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
    <div className={myStyle.btgp}> <Button buttonValue="Sign in" buttoneType="Submit"></Button>
<Button clickButton={this.cancel} buttonValue="Cancel" ></Button></div>



    </form>
)

return (
    <div className={myStyle.signin}>

    {authRedirect}
    <h1>Sign Up </h1>
    <div style={{color:'red'}}>{this.props.error}</div>
    {form}
    </div>

)
}

}

const mapStateToProps=state=>{

    return{

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
export default connect(mapStateToProps, mapActionToProps) (signin);