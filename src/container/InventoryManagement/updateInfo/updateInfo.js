
import React, { Component } from 'react';
import myStyle from './updateInfo.css';
import Input from '../../../components/UI/input/input';
import Button from '../../../components/UI/buttons/buttons';




import axios from '../../../axios';
import firebase from "firebase/app";
import 'firebase/database';
import 'firebase/storage';







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

        allRequired:"",
        keep2D:"",
        isNum:""
    }

addNewProductionHandler=(event)=>{
    event.preventDefault();


    //if item already exist, give an error report

    axios.get( '/inventory.json').then((res)=>{

        const inventoryList=res.data;

        for(let iv in inventoryList){

            if(this.state.beers.name.value.toLowerCase()===inventoryList[iv].name.toLowerCase()){

                this.setState({allRequired:"Item already exist"})
                return 
            }

        }
        if(this.state.allRequired===""){
            console.log("no the item", this.state.allRequired)
            if(!this.state.formIsValid||!this.state.beers.name.value){

                this.setState({allRequired:"All field are required"})
                return 
            }
            this.setState({allRequired:""})

            const storageRef=firebase.storage().ref("images").child(this.state.beers.image.imgFile.name)
            let context=this;
            const uploadtask=storageRef.put(this.state.beers.image.imgFile);
            //after uploadt task finished, get URL
            uploadtask.on(firebase.storage.TaskEvent.STATE_CHANGED, 
                          function(snapshot){},function(error){},
                          function(){
                storageRef.getDownloadURL()
                    .then(url =>{

                    const inventory= {};

                    for (let key in context.state.beers) {
                        if(key==='image') {
                            inventory[key]=url;
                        }else{
                            inventory[key] = context.state.beers[key].value; 
                        }

                    }

                    axios.post( '/inventory.json', inventory )
                        .then( response => {
                        const updatedInventory = {
                            ...context.state.beers
                        };
                        //clear input field
                        for(let id in  updatedInventory ){
                            const updatedInventoryElement = { 
                                ...updatedInventory[id]
                            };
                            updatedInventoryElement.value = ""; 
                            updatedInventoryElement.valid = false;
                            updatedInventoryElement.touched = false;


                            if(id==='image'){
                                updatedInventoryElement.imgFile=" "
                            }
                            updatedInventory[id] = updatedInventoryElement;

                        }
                        context.setState({beers: updatedInventory, formIsValid: true}); 
                    } )
                        .catch( error => {
                        console.log("somthing wrong with store data to database")
                        console.log(error)
                    } );


                } ).catch(error=>{
                    console.log("Somthing wrong with get image url from storage")
                    console.log(error)
                })


            })
        }

    })







}

//Modify inventory

modifyItem=(event)=>{

    event.preventDefault();




    axios.get( '/inventory.json').then((res)=>{

        const inventoryList=res.data;
        let flag=false;
 
        for(let iv in inventoryList){
            console.log(this.state.beers.name.value.toLowerCase());
            console.log(inventoryList[iv].name.toLowerCase());


            if(this.state.beers.name.value.toLowerCase()===inventoryList[iv].name.toLowerCase()){
                flag=true;
                let update=inventoryList[iv];
                
                for (let key in this.state.beers) {
                    if(this.state.beers[key].value!==""){

                        update[key] = this.state.beers[key].value; 
                    }



                }
                axios.put('/inventory/'+iv+'.json', update).then((res)=>{
                    console.log("modify an item")
                }).catch((e)=>{
                     console.log("CANNOT modify an item. The error is:")
                     console.log(e)
                })

            }

        }
        if(!flag){
           
                this.setState({allRequired:"The item does not exist in the inventory"})
            
        }
    })
}
//validate input field
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
        if(!pattern.test(value)){
            this.setState({isNum:"only number is allowed"})
        }


        isValid=pattern.test(value)&&isValid;
    }

    if (rules.isFloat) {
        const pattern = /^\d+.\d{2}$/;
        if(!pattern.test(value)){
            this.setState({ keep2D:"must keep two decimal"})
        }
        isValid = pattern.test(value) && isValid;
    }

    return isValid;
}
//check input change 
inputChangeHandler=(event, id)=>{
    const updatedInventory = {
        ...this.state.beers
    };
    const updatedInventoryElement = { 
        ...updatedInventory[id]
    };
    this.setState({allRequired:""})
    updatedInventoryElement.value = event.target.value; 
    updatedInventoryElement.valid = this.checkValidity(updatedInventoryElement.value, updatedInventoryElement.validation);
    updatedInventoryElement.touched = true;
    


    if(id==='image'){
        updatedInventoryElement.imgFile=event.target.files[0]
    }
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


        <h1>Add New Production</h1>
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
    <Button buttonValue="Submit" buttoneType="Submit"></Button>
<Button clickButton={this.modifyItem} buttonValue="Modify" ></Button>


</form>
)

return(

    <div className={myStyle.UpdateInfo}>

    {form}


    <div style={{color:'red'}}>{this.state.allRequired}</div>

    </div>
)
}

}


export default UpdateInfo;
