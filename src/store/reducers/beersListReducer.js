import * as actionType from '../actions/actionTypes';
import axios from '../../axios';

const initialState={
    inventory:{}
}
    
const beersListReducer = (state=initialState, action)=>{
    
   switch (action.type){
       case actionType.ADD_NEWBEER:
           return {}
       case actionType.UPDATE_BEER:
           return {}
       default:
           return state;
   }
    
}

export default beersListReducer;



