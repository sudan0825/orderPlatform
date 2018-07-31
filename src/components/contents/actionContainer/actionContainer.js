import React from 'react';
import myStyle from './actionContainer.css';
import Button from '../../UI/buttons/buttons';


const actionContainer=(props)=>(
    <div className={myStyle.actionContainer}>
   
    
         
    <div className={myStyle.buttonDiv}> 
    <Button clickButton={props.more} disableButton={props.dplus} buttonValue={props.plus}></Button>
    <div>{props.count}</div>
    <Button clickButton={props.less} disableButton={props.dmin} buttonValue={props.minus}></Button>
    
    </div>
   <Button clickButton={props.addToCart} disableButton={props.dmin} buttonValue="Add"> </Button>
                  
   </div>)
    
export default actionContainer;