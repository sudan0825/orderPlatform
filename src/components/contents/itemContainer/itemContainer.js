import React from 'react';
import myStyle from './itemContainer.css'

import ActionContainer from '../actionContainer/actionContainer';
import ImageContainer from '../imageContainer/imageContainer';


const itemContainer=(props)=>(
    <div className={myStyle.itemContainer}>
    <ActionContainer/>
    <ImageContainer/>
            
                  
   </div>)
    
export default itemContainer;