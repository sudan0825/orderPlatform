import React from 'react';
import myStyle from './NavigationItems.css';


const navigationItems=(props)=>{
   
    return (
    <li className={myStyle.NavigationItems}>
        {props.item}
        </li>
       )
}
        
        export default navigationItems;