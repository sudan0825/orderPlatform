import * as actionTypes from './actionTypes';
import axios from '../../axios'



export const getInventoryStart =()=>{
    return {
        type:actionTypes.GET_INVENTORY_START
    }
}
export const getInventorySuccess =(inventory)=>{
    return {
        type:actionTypes.GET_INVENTORY_SUCCESS,
        inventory:inventory
    }
}
export const getInventoryFail =(error)=>{
    return {
        type:actionTypes.GET_INVENTORY_FAIL,
        error:error
    }
}


export const getInventory=()=>{
    return dispatch=>{
        axios.get('/inventory.json')
         .then(res=>{
            console.log("get inventory -redux-axios")
            const inventory=[];
            for (let key in res.data){
                inventory.push({
                    ...res.data[key],
                    id:key
                });
            }
      
            dispatch(getInventorySuccess(inventory));
        })
        .catch(err=>{
            
             console.log("fail to get inventory -redux")
            dispatch(getInventoryFail(err));
        });
    }
    
}

