import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';


import firebase from "firebase";


var config = {
    apiKey: "AIzaSyDgHLk9l9wcmoJvxddAtJauWKnNRQF65ZM",
    authDomain: "orderplatform2018.firebaseapp.com",
    databaseURL: "https://orderplatform2018.firebaseio.com",
    projectId: "orderplatform2018",
    storageBucket: "orderplatform2018.appspot.com",
    messagingSenderId: "227376851876"
  };
  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
