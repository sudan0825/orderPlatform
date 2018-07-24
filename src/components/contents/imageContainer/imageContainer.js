import React from 'react';
import myStyle from './imageContainer.css';


const imageContainer=(props)=>{
   
    return (
    <div className={myStyle.imageContainer}>
       
               
        <div className={myStyle.image}><img src={props.image} alt='production pic'/></div>
                  
   </div>)
        }
    
export default imageContainer;