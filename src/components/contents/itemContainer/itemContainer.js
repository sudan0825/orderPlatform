import React from 'react';
import myStyle from './itemContainer.css'

import ActionContainer from '../actionContainer/actionContainer';
import ImageContainer from '../imageContainer/imageContainer';
import Description from '../description/description';



const itemContainer=(props)=>(
    <div className={myStyle.itemContainer}>
    <ImageContainer
    image={props.image}/>
    <div>
    <Description 
    price={props.price}
    name={props.name}
  
   
    
    />
    
    <ActionContainer 

    more={props.more}
    less={props.less}
    count={props.count}
    dplus={props.dplus}
    dmin={props.dmin}
    addToCart={props.addToCart}
    plus="+"
    minus="-"
    >{props.children}</ActionContainer>

</div>


    </div>)

    export default itemContainer;