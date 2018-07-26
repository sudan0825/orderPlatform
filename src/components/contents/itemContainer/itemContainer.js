import React from 'react';
import myStyle from './itemContainer.css'

import ActionContainer from '../actionContainer/actionContainer';
import ImageContainer from '../imageContainer/imageContainer';



const itemContainer=(props)=>(
    <div className={myStyle.itemContainer}>
     <ImageContainer
     image={props.image}/>
    <ActionContainer 
    price={props.price}
    name={props.name}
    description={props.description}
    more={props.more}
    less={props.less}
    count={props.count}
    dplus={props.dplus}
    dmin={props.dmin}
    plus="+"
    minus="-"
    >{props.children}</ActionContainer>
  
   
            
                  
   </div>)
    
export default itemContainer;