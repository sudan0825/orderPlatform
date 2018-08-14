import React from 'react';
import myStyle from './NavigationItems.css';

import { NavLink } from 'react-router-dom';


const navigationItems=(props)=>{
   
    return (
    <li className={myStyle.NavigationItems}>
       <NavLink 
            to={props.link}
            exact={props.exact}
            activeClassName={myStyle.active}>{props.children}</NavLink>
        
        
        </li>
       )
}
        
        export default navigationItems;

