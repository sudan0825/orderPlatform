import React, { Component } from 'react';
import myStyle from './LoadMenu.css';
import ItemContainer from '../../components/contents/itemContainer/itemContainer';
import axios from '../../axios'




class LoadMenu extends Component {
    state ={
       beers:{},
       totalPrice:0,
       totalNumber:0
       
    }
componentWillMount(){
    axios.get('/inventory.json').then(res=>{
        
       let inventory=res.data;
        for (let item in inventory){
            inventory[item].count=0;
            inventory[item].disablePlus=false;
            inventory[item].disableMinus=true;
        }
        this.setState({beers:inventory})
      
    }).catch(error=>{
        console.log(error)
    })
}

componentDidMount(){
   
}
add=(key)=>{
    let addTotal=0;
    let UpdatedOrder={
        ...this.state.beers
    }
    const orderItem={
        ...UpdatedOrder[key]
    }
    
    if(orderItem.count<orderItem.inventory){
    
       orderItem.count+=1; 
        addTotal+=1;
    }
     
     if(orderItem.count===Number(orderItem.inventory)){
        
       orderItem.disablePlus=true;  
     } 
       
    if(orderItem.count>0)   orderItem.disableMinus=false;
    UpdatedOrder[key]=orderItem;
    this.setState({beers:UpdatedOrder,totalNumber:this.state.totalNumber+addTotal});
    console.log(orderItem.disablePlus);
    
}

minus=(key)=>{
    let lessTotal=0;
    let UpdatedOrder={
        ...this.state.beers
    }
    const orderItem={
        ...UpdatedOrder[key]
    }
   
    if(orderItem.count>0){
       orderItem.count-=1; 
        lessTotal-=1;
    }
     if(orderItem.count<orderItem.inventory) orderItem.disablePlus=false;
     if(orderItem.count===0)orderItem.disableMinus=true;
  
    UpdatedOrder[key]=orderItem;
    this.setState({beers:UpdatedOrder,totalNumber:this.state.totalNumber+lessTotal});
    console.log(this.state.totalNumber);
}

    render(){
        const items= [];

        if(this.state.beers){
           
            for(let key in this.state.beers){

                items.push( 
                <ItemContainer
                key={this.state.beers[key].name}
                price={this.state.beers[key].price}
                name={this.state.beers[key].name}
                image={this.state.beers[key].image}
                description={this.state.beers[key].description}
                more={()=>this.add(key)}
                less={()=>this.minus(key)}
                count={this.state.beers[key].count}
                dplus={this.state.beers[key].disablePlus}
                dmin={this.state.beers[key].disableMinus}
                />)
            }
        }
    
                        
        return (<div className={myStyle.LoadMenu}>
                           <h1>Menu</h1>
                           {items}
                          

                </div>)
    }
}
 export default LoadMenu;