import React, { Component } from 'react';

import myStyle from './App.css';

import TopBar from './components/topBar/topBar';
import Footer from './components/footer/footer';
import Contents from './container/contents';
//import axios from './axios';


import { BrowserRouter } from 'react-router-dom';
import {connect } from 'react-redux'


class App extends Component {



    componentWillMount(){

        this.firstTimeVisit()
    }
    firstTimeVisit=()=>{
        alert("To fully use the site's functions, please sign up (you can use a fake email address). Get detail production decription at here: https://github.com/sudan0825/orderPlatform")
    }
    render() {


        return (

            <BrowserRouter>
            <div className={myStyle.App}>
            <TopBar

            isAuthed={this.props.isAuthenticated}
            /> 

            <Contents />

            <Footer/>

            </div>

            </BrowserRouter>

        );
    }
}

const mapStateToProps = state =>{
    return {
        isAuthenticated:state.authReducer.isAuthed
    }
}
export default connect(mapStateToProps,null) (App);
