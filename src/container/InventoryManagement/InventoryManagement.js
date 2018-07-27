import React, { Component } from 'react';
import myStyle from './InventoryManagement.css';
import UpdateInfo from './updateInfo/updateInfo';
//import Inventory from '../../components/contents/inventory/inventory';



class InventoryManagement extends Component {
    state ={
       
    }

    render(){
        
        return (<div className={myStyle.InventoryManagement}>
                <UpdateInfo />
               
                </div>)
    }
}
 export default InventoryManagement;