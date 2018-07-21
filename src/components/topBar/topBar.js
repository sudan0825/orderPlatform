import React from 'react';
import myStyle from './topBar.css'

const topBar=(props)=>(
    <div className={myStyle.topBar}>
    
            {props.children}
                  
   </div>)
    
    export default topBar;