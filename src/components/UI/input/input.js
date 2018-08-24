import React from 'react';
import myStyle from './input.css';



const input=(props)=>{
    let inputElement=null;
    const inputClasses =[myStyle.InputElement];
    
    if (props.invalid && props.shouldValidate && props.touched) {
   
        inputClasses.push(myStyle.Invalid);
    }
     let option=[];
    if(props.elemType==='select'){
        let config={...props.elemConfig}
       
        option=config.option.map((o)=>{
           
            return <option key={o} value={o} >{o}</option>
        })
    }
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
            
        case ('select'):
            inputElement=<select 
            className={inputClasses.join(' ')}
            {...props.elemConfig}
            value={props.value}
            onChange={props.changed}>{option}</select>
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