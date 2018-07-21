import React, { Component } from 'react';
import Backdrop from './components/hoc/Backdrop/Backdrop'
import myStyle from './App.css';
import NavigationMenue from './components/topBar/navigation/NavigationMenue/NavigationMenue';
import TopBar from './components/topBar/topBar';
import Footer from './components/footer/footer';
import Contents from './components/contents/contents';
import ActionContainer from './components/contents/actionContainer/actionContainer';


class App extends Component {
  render() {
    return (
      <div className={myStyle.App}>
       <TopBar>
        
         <NavigationMenue/>
        
        </TopBar>
       
        <Backdrop>  </Backdrop>
       
        <Contents/>
       
        <Footer/>
     
      </div>
    );
  }
}

export default App;
