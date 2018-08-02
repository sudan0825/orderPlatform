import React from 'react';
import myStyle from './topBar.css';

import NavigationMenue from './navigation/NavigationMenue/NavigationMenue';

const topBar=(props)=>(
    <div className={myStyle.topBar}>
       <NavigationMenue/>
      
                  
   </div>)
    
    export default topBar;