import React from 'react';
import myStyle from './topBar.css';
import ShoppingCart from './navigation/shoppingCart/shoppingCart';
import NavigationMenue from './navigation/NavigationMenue/NavigationMenue';

const topBar=(props)=>(
    <div className={myStyle.topBar}>
       <NavigationMenue/>
       <ShoppingCart/>
                  
   </div>)
    
    export default topBar;