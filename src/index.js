import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import beersListReducer from './store/reducers/beersListReducer';
import ordersReducer from './store/reducers/ordersReducer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';





import firebase from "firebase/app";
import 'firebase/database';
import 'firebase/storage';
//config firebase App
var config = {
    apiKey: "AIzaSyDgHLk9l9wcmoJvxddAtJauWKnNRQF65ZM",
    authDomain: "orderplatform2018.firebaseapp.com",
    databaseURL: "https://orderplatform2018.firebaseio.com",
    projectId: "orderplatform2018",
    storageBucket: "orderplatform2018.appspot.com",
    messagingSenderId: "227376851876"
  };
  firebase.initializeApp(config);

//create store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer =combineReducers({
    beersListReducer:beersListReducer,
    ordersReducer:ordersReducer
})

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));




ReactDOM.render(  <Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();


