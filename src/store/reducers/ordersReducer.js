import * as actionType from '../actions/actionTypes';
import {updateStateFactory} from '../../updateStateFactory';

import axios from '../../axios';



const initialState={
    ordersList:{},
    totalPrice:0
}
const add = (state, action)=>{

    let cost =0;
    let id=action.beer.id, theOrder=state.ordersList[id];

    if(theOrder){


        if(theOrder.inventory>theOrder.count){
            cost +=+theOrder.price
            theOrder.count++;  
        }
        if(theOrder.inventory<=theOrder.count)
            theOrder.disablePlus=true;
        if(theOrder.count>0)   theOrder.disableMinus=false;
        return updateStateFactory(state,{
            totalPrice:state.totalPrice+cost
        })

    }
    const orderItem={
        ...action.beer,


    }

        if(orderItem.inventory >0){
        orderItem.count=1;
        cost+=Number(orderItem.price);
    }

    if(orderItem.inventory<=0){
        orderItem.disablePlus=true;
    }
    if(orderItem.count>0)   orderItem.disableMinus=false;

    let newItem={[orderItem.id]:orderItem};

    const addItemToList=updateStateFactory(state.ordersList,newItem);

    return updateStateFactory(state,{
        ordersList:addItemToList,
        totalPrice:state.totalPrice+cost
    })
}

const remove = (state, action)=>{

    let cost =0;
    let id=action.beer.id, theOrder=state.ordersList[id];

    if(theOrder){
        console.log(state.ordersList)

        if(theOrder.count>0){
            cost -=+theOrder.price
            theOrder.count--;  
        }
        if(theOrder.count===0)
            theOrder.disableMinus=true;
        if(theOrder.inventory>theOrder.count){
            theOrder.disablePlus=false;
        }
        return updateStateFactory(state,{
            totalPrice:state.totalPrice-cost
        })

    }

}


const removeFromCart = (state, action)=>{
    let copied = {
        ...state.ordersList
    }
    delete copied[action.key]
    return updateStateFactory(state, {
        ordersList:copied
    })
}

const cancelCheckOut =(state, action)=>{
    let clearList={};

    return updateStateFactory(state,{
        ordersList:clearList
    })

}

const postOrderSuccess=(state,action)=>{
    let clearList={};
    axios.get('/inventory.json').then(res=>{
        let updateInventory={
            ...res.data
        }
           
        for (let beer in updateInventory){
            
            for(let order in state.ordersList){
                
               
                if(beer===order){
                    
                 
                    updateInventory[beer].inventory-=state.ordersList[order].count;
                   axios.patch('/inventory/'+beer+'.json',{inventory:updateInventory[beer].inventory})                     .then(res=>{console.log("update inventory")})  
                          .catch(e=>{console.log('CANNOT UPDATE')})

                }
            }
        }
       
    }).catch(err=>{
        console.log("cannot get inventory if post success")
        console.log(err)
    })
    
     return updateStateFactory(state,{
            ordersList:clearList
        })

}


const ordersListReducer = (state=initialState, action)=>{
    switch (action.type){
        case actionType.ADD_BEER:  return add(state, action)
        case actionType.REMOVE_BEER: return   remove(state,action)  
        case actionType.REMOVE_FROM_CART:return  removeFromCart(state,action)
        case actionType.CANCEL_CHECKOUT:return  cancelCheckOut(state,action)
        case actionType.POST_ORDER_SUCCESS:return  postOrderSuccess(state,action)
        default: return state;
    }
}
export default ordersListReducer;







