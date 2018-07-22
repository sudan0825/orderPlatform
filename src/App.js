import React, { Component } from 'react';
import Backdrop from './components/hoc/Backdrop/Backdrop'
import myStyle from './App.css';
import NavigationMenue from './components/topBar/navigation/NavigationMenue/NavigationMenue';
import TopBar from './components/topBar/topBar';
import Footer from './components/footer/footer';
import Contents from './components/contents/contents';


import { BrowserRouter } from 'react-router-dom';


class App extends Component {
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
