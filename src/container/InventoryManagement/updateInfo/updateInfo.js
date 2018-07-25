import React, { Component } from 'react';
import myStyle from './updateInfo.css';
import Input from '../../../components/UI/input/input';

import FileUploader from "react-firebase-file-uploader";

import axios from '../../../axios';
import a from 'axios';
import firebase from "firebase";






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
                    placeholder:'Number only & Keep 2 decimal',

                },
                value:'',
                validation:{
                    required:true,
                    isFloat:true
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
                imgFile:null,
                imgURL:'',
                validation:{
                    required:true

                },
                valid:false,
                touched:false
            }
        },
        formIsValid:true,
        
        allRequired:""
    }

addNewProductionHandler=(event)=>{
    event.preventDefault();
    if(!this.state.formIsValid||!this.state.beers.name.value){

        this.setState({allRequired:"All field are required"})
        return 
    }
    this.setState({allRequired:""})
    console.log(this.state.beers.image.imgFile)
    
    
    const storageRef=firebase.storage().ref("images").child(this.state.beers.image.imgFile.name)
    
    const uploadtask=storageRef.put(this.state.beers.image.imgFile)
    const  setURLtask=storageRef.getDownloadURL()
                     .then(url =>{
                         
                          const updatedInventory = {
                          ...this.state.beers
                           };
                          updatedInventory.image.imgURL=url;
                         console.log("url",updatedInventory.image.imgURL)


                         this.setState({beers: updatedInventory});
                     } )
    
    
    
   
    const inventory= {};
    for (let key in this.state.beers) {

        inventory[key] = this.state.beers[key].value;
        this.state.beers[key].value=""

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


    if(rules.isNumeric){
        const pattern=/^\d+$/;
        isValid=pattern.test(value)&&isValid;
    }

    if (rules.isFloat) {
        const pattern = /^\d+.\d{2}$/;
        isValid = pattern.test(value) && isValid;
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
    
    if(id==='image'){
        updatedInventoryElement.imgFile=event.target.files[0]
    }
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
        changed={(event)=>this.inputChangeHandler(event, elem.id)} 

        />
    )
   


    )


    }
    <button>Submit</button>


    </form>
    )

    return(

        <div className={myStyle.UpdateInfo}>

        {form}
      

        <div>{this.state.allRequired}</div>

        </div>
    )
}

}


export default UpdateInfo;