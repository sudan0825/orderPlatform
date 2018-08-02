import React,{Component} from 'react';
import myStyle from './login.css';

import Input from '../../components/UI/input/input';
import Button from '../../components/UI/buttons/buttons';

class login extends Component{
    state={
            user:{
             Username:{
            elemType:'input',
            elemConfig:{
                    type:'text',
                        placeholder:'User name'
                },
             value:'',
              validation:{
                 required:true
                        },
              valid:false,
             touched:false
        },
         Password:{
            elemType:'input',
            elemConfig:{
                    type:'password',
                    placeholder:'password'
                },
             value:'',
              validation:{
                            required:true
                        },
              valid:false,
             touched:false
        }
        }
     
         
    }
render(){
    
        const formElementArray =[];

    for(let key in this.state.user){
        formElementArray.push({
            id:key,
            config:this.state.user[key]
        });
    }

    let form=(
        <form onSubmit={this.addNewProductionHandler}>


        {formElementArray.map(elem=>(
        <Input key={elem.id}
        elemType={elem.config.elemType}
        elemConfig={elem.config.elemConfig}
        value={elem.config.value}
        invalid={!elem.config.valid}
        shouldValidate={elem.config.validation}
        touched={elem.config.touched}
        label={elem.id}
        keep2D={this.state.keep2D}
        isNum={this.state.isNum}
        changed={(event)=>this.inputChangeHandler(event, elem.id)} 

/>

))}
    <div className={myStyle.btgp}><Button buttonValue="Log in" buttoneType="Submit"></Button>
    <Button clickButton={this.cancel} buttonValue="Cancel" ></Button></div>


</form>
)

    return (
        <div className={myStyle.login}>
        <h1>Log in </h1>
        {form}
        </div>

    )
}

}

export default login;