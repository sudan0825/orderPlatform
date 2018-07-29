import React from 'react';
import myStyle from './backDrop.css';


const backDrop=(props)=>(
    props.show? <div className={myStyle.backDrop} onClick={props.clickBackDrop}>{props.children}</div>:null)
                         
export default backDrop;