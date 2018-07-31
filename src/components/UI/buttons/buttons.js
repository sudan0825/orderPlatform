import React from 'react';



const buttons=(props)=>(<button onClick={props.clickButton} disabled={props.disableButton}>{props.children}</button>)
                         
export default buttons;