import * as actionTypes from '../actions/actionTypes';
import {updateStateFactory} from '../../updateStateFactory';

const initialState={
    email:'',
    idToken:'',
    isAuthed:false,
    error:'',
    loading:false,
    redirecPath:'/'
}
const authStart = ( state, action ) => {
    return updateStateFactory( state, { error: null, loading: true } );
};

const authSuccess = (state, action) => {
    
    return updateStateFactory( state, { 
        redirecPath:'/',
        isAuthed:true
     } );
};

const authFail = (state, action) => {
   
    return updateStateFactory( state, {
        error: action.error,
        loading: false
    });
};

const logout = (state, action) => {
    return updateStateFactory(state, { isAuthed: false});
};

const deleteError=(state, action)=>{
    return updateStateFactory(state, {error:null})
}

const setRedirectPath=(state, action)=>{

    return updateStateFactory(state, { redirecPath: action.path })

}
const authReducer=(state=initialState, action)=>{
      switch ( action.type ) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
       
        case actionTypes.SET_REDIRECT_PATH: return setRedirectPath(state,action);
          case actionTypes.DELETE_ERROR_REOPRT: return deleteError(state, action);
          case actionTypes.LOGOUT_SUCCESS: return logout(state, action);
          
        default:
            return state;
    }
    
}


export default authReducer;
