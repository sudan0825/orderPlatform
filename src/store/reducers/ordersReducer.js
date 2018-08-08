import * as actionType from '../actions/actionTypes';
import axios from '../../axios';

const initialState={
    ordersList:[],
    totalPrice:0
}
    
const ordersListReducer = (state=initialState, action)=>{
      switch (action.type){
       case actionType.ADD_BEER:
           return {
               
           }
       case actionType.REMOVE_BEER:
           return {
               
           }
              
      case actionType.ADD_TO_ORDER:
           return {
               
           }
       default:
           return state;
   }
}
export default ordersListReducer;