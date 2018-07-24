import React from 'react';
import myStyle from './NavigationItems.css';

import { NavLink } from 'react-router-dom';


const navigationItems=(props)=>{
   
    return (
    <li className={myStyle.NavigationItems}>
        <NavLink to={{
        pathname:'/'+props.item,
        }}
       
         activeStyle={{
            color: 'aqua',
         }}>
        {props.item}
        </NavLink></li>
       )
}
        
        export default navigationItems;

