import * as actionType from '../actions/actionTypes';
import {updateStateFactory} from '../../updateStateFactory';

const initialState={
    inventory:[],
    loading: false
}


const getInventoryStart=(state, action)=>{
    return updateStateFactory(state, {loading:true});
}
const getInventorySuccess=(state, action)=>{
  
    return updateStateFactory(state, {
        inventory:action.inventory,
        loading:false});
}
const getInventoryFail=(state, action)=>{
    return updateStateFactory(state, {loading:false});
}

const addNewBeer=(state, action)=>{
    return state
}
const updateBeer=(state, action)=>{
    return state
}
const deleteBeer=(state, action)=>{
    return state
}

const beersListReducer = (state=initialState, action)=>{
    
   switch (action.type){
       case actionType.ADD_NEWBEER: return addNewBeer(state, action);
       case actionType.UPDATE_BEER: return updateBeer(state, action);
       case actionType.DELETE_BEER: return deleteBeer(state, action);
       case actionType.GET_INVENTORY_START: return getInventoryStart(state, action);
       case actionType.GET_INVENTORY_SUCCESS: return getInventorySuccess(state, action);
       case actionType.GET_INVENTORY_FAIL: return getInventoryFail(state, action);
       default: return state;
   }
    
}

export default beersListReducer;
//
//export const GET_INVENTORY_START='GET_INVENTORY_START';
//export const GET_INVENTORY_SUCCESS='GET_INVENTORY_SUCCESS';
//export const GET_INVENTORY_FAIL='GET_INVENTORY_FAIL';
//
//export const ADD_NEWBEER ='ADD_NEWBEER';
//export const UPDATE_BEER='UPDATE_BEER';
//export const DELETE_BEER='DELETE_BEER';
//
//
//export const ADD_BEER='UPDATE_BEER';
//export const REMOVE_BEER='REMOVE_BEER';
//export const ADD_TO_ORDER='ADD_TO_ORDER';



