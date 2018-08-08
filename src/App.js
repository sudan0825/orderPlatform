import React, { Component } from 'react';

import myStyle from './App.css';

import TopBar from './components/topBar/topBar';
import Footer from './components/footer/footer';
import Contents from './components/contents/contents';
//import axios from './axios';


import { BrowserRouter } from 'react-router-dom';


class App extends Component {

    componentDidMount(){
        
//        axios.post('/orders.json', order).then((req)=>{
//        console.log(req)
//    }).catch(error=> console.log(error));
   }
  render() {
    return (
       
        <BrowserRouter>
      <div className={myStyle.App}>
       <TopBar/> 
       
        <Contents />
       
        <Footer/>
     
      </div>
        
           </BrowserRouter>
        
    );
  }
}

export default App;
