import React, { Component } from 'react';
import myStyle from './updateInfo.css';
import Input from '../../../components/UI/input/input';

import axios from '../../../axios'





class UpdateInfo extends Component{

    state={
         beers:{
             name:{
                 elemType:'input',
                 elemConfig:{
                     type:'text',
                     placeholder:'production name'
                 },
                 value:'',
                 validation:{
                     required:true
                 },
                 valid:false,
                 touched:false
             },
             description:{
                 elemType:'textarea',
                 elemConfig:{
                     type:'text',
                     placeholder:'production description'
                 },
                 value:'',
                 validation:{
                     required:true
                 },
                 valid:false,
                 touched:false
             },
             price:{
                 elemType:'input',
                 elemConfig:{
                     type:'number',
                     placeholder:'Number only',
                  
                 },
                 value:'',
                 validation:{
                     required:true,
                     isNumeric:true
                 },
                 valid:false,
                 touched:false
             },
             inventory:{
                 elemType:'input',
                 elemConfig:{
                     type:'number',
                     placeholder:'Number only',
                  
                 },
                 value:'',
                 validation:{
                     required:true,
                     isNumeric:true
                 },
                 valid:false,
                 touched:false
             },
               image:{
                 
                 elemType:'file',
                 elemConfig:{
                     type:'file',
                     placeholder:'0',
                     accept:"image/*"
                  
                 },
                 value:'',
                 validation:{
                     required:true
                     
                 },
                 valid:false,
                 touched:false
             }
         },
        formIsValid:true
    }

addNewProductionHandler=(event)=>{
     event.preventDefault();
       
        const inventory= {};
        for (let key in this.state.beers) {
            inventory[key] = this.state.beers[key].value;
        }
        
        axios.post( '/inventory.json', inventory )
            .then( response => {
                
             
            } )
            .catch( error => {
             console.log(error)
            } ); 
}


    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }
        
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
       

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    }

inputChangeHandler=(event, id)=>{
   const updatedInventory = {
            ...this.state.beers
        };
        const updatedInventoryElement = { 
            ...updatedInventory[id]
        };
        updatedInventoryElement.value = event.target.value;
        updatedInventoryElement.valid = this.checkValidity(updatedInventoryElement.value, updatedInventoryElement.validation);
        updatedInventoryElement.touched = true;
        updatedInventory[id] = updatedInventoryElement;
        
        let formIsValid = true;
        for (let id in updatedInventory) {
            formIsValid = updatedInventory[id].valid && formIsValid;
        }
        this.setState({beers: updatedInventory, formIsValid: formIsValid});  
}
render(){
    
    const formElementArray =[];
    
    for(let key in this.state.beers){
        formElementArray.push({
            id:key,
            config:this.state.beers[key]
        });
    }
    
    let form=(
       <form onSubmit={this.addNewProductionHandler}>
        <h3>Add New Production</h3>
        {formElementArray.map(elem=>(
         <Input key={elem.id}
                elemType={elem.config.elemType}
                elemConfig={elem.config.elemConfig}
                value={elem.config.value}
                invalid={!elem.config.valid}
                shouldValidate={elem.config.validation}
                touched={elem.config.touched}
                label={elem.id}
                changed={(event)=>this.inputChangeHandler(event, elem.id)} />
        
         ))
            
        }
        <button>Submit</button>
       </form>
    )

    return(

        <div className={myStyle.UpdateInfo}>
        
        {form}
        {
        //        <div> {/*Update informaton*/}
//        <div className={myStyle.leftImg}>
//
//        <div>Drop Product Picture Here</div>
//
//        </div>
//        <div className={myStyle.rightInfo}>
//
//        <div> <label>Name</label> <input /></div>
//        <div><label>Discription</label> <textArea></textArea> </div>
//        <div> <label>price </label><input /> </div>
//        <button>Submit</button>
//        </div>
//        </div> 
        }


        </div>
    )
}

}


export default UpdateInfo;