import React from 'react';
import myStyle from './input.css';



const input=(props)=>{
    let inputElement=null;
    const inputClasses =[myStyle.InputElement];
    
    switch (props.elemType){
        case ('input'):
            inputElement=<input 
            className={inputClasses.join(' ')}
            {...props.elemConfig}
            value={props.value}
            onChange={props.changed} />
            break;
        case ('textarea'):
            inputElement=<textarea 
            className={inputClasses.join(' ')}
            {...props.elemConfig}
            value={props.value}
            onChange={props.changed} />
            break;
            
        default:
            inputElement=<input 
            className={inputClasses.join(' ')}
            {...props.elemConfig}
            value={props.value}
            onChange={props.changed} />
    }
            return (
            <div className={myStyle.Input}>
                <label className={myStyle.Label}>{props.label} </label>
                {inputElement}
                
                </div>
            )
}
    
    export default input;