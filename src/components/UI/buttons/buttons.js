import React from 'react';



const buttons=(props)=>(<button 
                        onClick={props.clickButton} 
                        disabled={props.disableButton}
                        type={props.buttonType}
                        value={props.buttonValue}>{props.buttonValue}</button>)
                         
export default buttons;