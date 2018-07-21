import React from 'react';
import myStyle from './imageContainer.css';
import budweiser from '../../../assets/budweiser.jpeg'

const imageContainer=(props)=>(
    <div className={myStyle.imageContainer}>
     
               
        <div className={myStyle.image}><img src={budweiser} alt='budweiser'/></div>
                  
   </div>)
    
export default imageContainer;