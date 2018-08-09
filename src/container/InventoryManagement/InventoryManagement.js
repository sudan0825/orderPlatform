import React, { Component } from 'react';
import { connect } from 'react-redux';
import myStyle from './InventoryManagement.css';
import * as actionTypes from '../../store/actions/index';




import axios from '../../axios';

import UpdateInfo from './updateInfo/updateInfo';
//import Inventory from '../../components/contents/inventory/inventory';

import ImageContainer from '../../components/contents/imageContainer/imageContainer';
import Description from '../../components/contents/description/description';
import Button from '../../components/UI/buttons/buttons';

class InventoryManagement extends Component {
    state={
     
        item:{
            name:"",
            description:"",
            price:"",
            inventory:"",
            image:""
            
        }
    }



componentWillMount(){
  this.props.onFetchInventory();
    console.log(this.props.inventory)
    console.log(this.props.loading)
   
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
    if(this.props.inventory){
        for(let i in this.props.inventory){

            productionList.push(
                <div key ={this.props.inventory[i].id} 
                   className={myStyle.productionList}>

                
                <ImageContainer
                image={this.props.inventory[i].image}/>
                
                <Description 
                price={this.props.inventory[i].price}
                name={this.props.inventory[i].name}
                inventory={this.props.inventory[i].inventory}
                description={this.props.inventory[i].description}
            
                
                

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

const mapStateToProps = state =>{
   return {
          inventory: state.beersListReducer.inventory,
          loading: state.beersListReducer.loading
                        };
                        
}
                        
const mapDispatchToProps =dispatch=>{
                        
        return {
                onFetchInventory:()=>dispatch (actionTypes.getInventory())
                        }             
                        
}
                        

 export default connect(mapStateToProps,mapDispatchToProps) (InventoryManagement, axios);