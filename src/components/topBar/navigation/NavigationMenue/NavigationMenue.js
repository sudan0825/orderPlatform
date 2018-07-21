import React, {Component} from 'react';
import myStyle from './NavigationMenue.css';

import NavigationItems from '../NavigationItems/NavigationItems'


class navigationMenue extends Component{
    
    state={
        menue:["Menue", "Orders"]
    }
    nvItems=this.state.menue.map((item)=>{
     
        return <NavigationItems key={item} item={item}/>})
    render(){
    return (
    <div className={myStyle.NavigationMenue}>
        
      <ul>{this.nvItems}</ul>
   </div>)
}
    
}
        
        export default navigationMenue;