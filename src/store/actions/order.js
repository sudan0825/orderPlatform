import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const add =(beer)=>{
    return {
        type:actionTypes.ADD_BEER,
        beer:beer
    }
}
export const remove =(beer)=>{
    return {
        type:actionTypes.REMOVE_BEER,
        beer:beer
    }
}

export const removeFromCart =(key)=>{
    return {
        type:actionTypes.REMOVE_FROM_CART,
        key:key
      
    }
}
export const cancelCheckOut=()=>{
    return {
        type:actionTypes.CANCEL_CHECKOUT
    }
}


export const postOrderStart =()=>{
    return {
        type:actionTypes.POST_ORDER_START
    }
}
export const postOrderSuccess =()=>{
    return {
        type:actionTypes.POST_ORDER_SUCCESS
    
      
    }
}
export const postOrderFail =(error)=>{
    return {
        type:actionTypes.POST_ORDER_FAIL,
        error:error
    }
}

export const checkout=(order,price)=>{
    let orderData=[order,price,new Date()]
    return dispatch => {
        axios.post('/orders.json',orderData)
        .then(res=>{
            console.log("post orders to DB")
            dispatch(postOrderSuccess(orderData))
        })
        .catch(err=>{
            dispatch(postOrderFail(err))
        })
    }
}

