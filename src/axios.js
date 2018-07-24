import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://orderplatform2018.firebaseio.com/'
    

});



// instance.interceptors.request...

export default instance;