import React from 'react';
import myStyle from './Backdrop.css'

const Backdrop=(props)=>(
    <div className={myStyle.Backdrop}>
    
             {props.children}
                  
   </div>)
    
    export default Backdrop;