import React, { Component } from 'react';
import myStyle from './InventoryManagement.css';
import axios from '../../axios';

import UpdateInfo from './updateInfo/updateInfo';
//import Inventory from '../../components/contents/inventory/inventory';

import ImageContainer from '../../components/contents/imageContainer/imageContainer';
import Description from '../../components/contents/description/description';
import Button from '../../components/UI/buttons/buttons';

class InventoryManagement extends Component {
    state={
        inventory:{},
        item:{
            name:"",
            description:"",
            price:"",
            inventory:"",
            image:""
            
        }
    }



componentWillMount(){

    axios.get('/inventory.json').then(res=>{
        
        this.setState({inventory:res.data})

    })
}

deleteItem=(i)=>{
   
   delete this.state.inventory[i];
    this.setState({inventory:this.state.inventory})
 
    axios.delete('/inventory/'+i+'.json').then((res)=>{
        console.log(res)
    }).catch((error)=>{
        console.log(error)
    })
  
    
}

modifyItem=(product)=>{
   let update={...this.state.item}
    
    for(let i in update){
       
        update[i]=product[i]
       
    }

    this.setState({item:update})
    
  
}
render(){

  let productionList=[]
    if(this.state.inventory){
        for(let i in this.state.inventory){

            productionList.push(
                <div key ={i} 
                   className={myStyle.productionList}>

                
                <ImageContainer
                image={this.state.inventory[i].image}/>
                
                <Description 
                price={this.state.inventory[i].price}
                name={this.state.inventory[i].name}
                inventory={this.state.inventory[i].inventory}
                description={this.state.inventory[i].description}
            
                
                

                />
                
                <div className={myStyle.bt}>
                 <Button clickButton={()=>this.modifyItem(this.state.inventory[i])} buttonValue="Modify"></Button>
                 <Button clickButton={()=>this.deleteItem(i)} buttonValue="Delete"></Button>
                </div>



                </div>
            ) 


                }
                }

                return (<div className={myStyle.InventoryManagement}>
                <UpdateInfo 
                       name={this.state.item.name}
                       description={this.state.item.description}
                       price={this.state.item.price}
                       inventory={this.state.item.inventory}
                       image={this.state.item.image}
             />
                        <h1>Inventory List</h1>
                 {productionList}


                </div>)
                }
                }
                export default InventoryManagement;