import React, { Component } from 'react';
import myStyle from './LoadMenu.css';
import ItemContainer from '../../components/contents/itemContainer/itemContainer';
import axios from '../../axios'




class LoadMenu extends Component {
    state ={
       beers:{}
    }
componentWillMount(){
    axios.get('/inventory.json').then(res=>{
        this.setState({beers:res.data})
        console.log(this.state.beers)
    }).catch(error=>{
        console.log(error)
    })
}

componentDidMount(){
    axios.get('/inventory.json').then(res=>{
        this.setState({beers:res.data})
        console.log(this.state.beers)
    }).catch(error=>{
        console.log(error)
    })
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
                />)
            }
        }
    
                        
        return (<div className={myStyle.LoadMenu}>
                           <h1>Load menu</h1>
                           {items}
                          

                </div>)
    }
}
 export default LoadMenu;