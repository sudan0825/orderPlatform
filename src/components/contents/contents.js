import React from 'react';
import myStyle from './contents.css'

import ItemContainer from './itemContainer/itemContainer'

const contents=(props)=>(
    <div className={myStyle.contents}>
    <ItemContainer/>
    <ItemContainer/>
    <ItemContainer/>
    <ItemContainer/>

            
                  
   </div>)
    
export default contents;