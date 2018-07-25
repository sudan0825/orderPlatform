import React, { Component } from 'react';
import Backdrop from './components/hoc/Backdrop/Backdrop'
import myStyle from './App.css';
import NavigationMenue from './components/topBar/navigation/NavigationMenue/NavigationMenue';
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
       <TopBar>
        
         <NavigationMenue/>
        
        </TopBar>
       
        <Backdrop>  </Backdrop>
       
        <Contents/>
       
        <Footer/>
     
      </div>
         </BrowserRouter>
    );
  }
}

export default App;
