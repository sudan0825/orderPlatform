import React from 'react';
import myStyle from './NavigationMenue.css';


import NavigationItems from '../NavigationItems/NavigationItems';



const navigationMenue=()=>{

    let menue=["Menu", "Orders", "InventoryManagement"];
     let log=["Login", "Signin"]
    
let nvItems=menue.map((item)=>(<NavigationItems key={item} item={item}/>))
let logsMenu=log.map((l)=>(<NavigationItems key={l} item={l}/>))
   
        return (
            <div className={myStyle.NavigationMenue}>

            <ul>{nvItems}</ul>
            <ul>{logsMenu}</ul>

            </div>
        )
            }

    
export default navigationMenue;



