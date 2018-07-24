import React, { Component } from 'react';
import myStyle from './InventoryManagement.css';
import UpdateInfo from '../../components/contents/updateInfo/updateInfo';
import Inventory from '../../components/contents/inventory/inventory';



class InventoryManagement extends Component {
    state ={
        beers:{
            name:"",
            pic:"",
            discription:"",
            price:"",
            inventory:0
        }
    }

    render(){
        
        return (<div className={myStyle.InventoryManagement}>
                <UpdateInfo/>
                <Inventory/>
                </div>)
    }
}
 export default InventoryManagement;