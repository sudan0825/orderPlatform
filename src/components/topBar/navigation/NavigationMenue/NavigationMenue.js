import React from 'react';
import myStyle from './NavigationMenue.css';


import NavigationItems from '../NavigationItems/NavigationItems';



const navigationMenue=(props)=>{
//
//    let menue=["Menu", "Orders", "InventoryManagement"];
//     let log=["Login", "Signup","Logout"]
//    
//let nvItems=menue.map((item)=>(<NavigationItems key={item} item={item}/>))
//let logsMenu=log.map((l)=>(<NavigationItems key={l} item={l}/>))
   
        return (
            <div className={myStyle.NavigationMenue}>

            <ul>
              <NavigationItems link="/menu">Menu</NavigationItems>
            {props.isAuthed? <NavigationItems link="/orders" >Orders</NavigationItems>:null}
            {props.isAuthed? <NavigationItems link="/InventoryManagement" >InventoryManagement</NavigationItems>:null}
           
            
            
            </ul>
            <ul>
            
             {props.isAuthed? null:<NavigationItems link="/login">Login</NavigationItems>}
             {props.isAuthed? null:<NavigationItems link="/signup">Signup</NavigationItems>}
             {props.isAuthed? <NavigationItems link="/logout">Log Out</NavigationItems>:null}
            </ul>

            </div>
        )
            }

    
export default navigationMenue;



