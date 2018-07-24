import React from 'react';
import myStyle from './actionContainer.css'

const actionContainer=(props)=>(
    <div className={myStyle.actionContainer}>
    <h3>Sample</h3>
    
            <p>Let's take a look at building something using Firebase and React. We'll be building something called Fun Food Friends, a web application for planning your next potluck, which hopefully feels like something rather "real world", in that you can imagine using these technologies in your own production projects.</p>
    <p ><b>Price:</b> $5 </p>
    <button>{props.plus}</button>
    <button>{props.minus}</button>
                  
   </div>)
    
export default actionContainer;