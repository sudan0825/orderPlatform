import * as actionTypes from './actionTypes';

import firebase from "firebase/app";
import 'firebase/auth';




export const authStart =()=>{


    return {
        type: actionTypes.AUTH_START
    };
}

export const authSuccess=()=>{
    return {
        type: actionTypes.AUTH_SUCCESS

    }
}

export const authFail =(err)=>{
    console.log(err)
    return {
        type:actionTypes.AUTH_FAIL,
        error:err
    }
}
export const deleteError=()=>{
    return {
        type:actionTypes.DELETE_ERROR_REOPRT

    }
}

export const logout=()=>{
    firebase.auth().signOut().then(function() {
        
    }).catch(function(error) {
        console.log("cannot log out")
    });
    return {
            type:actionTypes.LOGOUT_SUCCESS

        }
}

export const auth=(data)=>{
    return dispatch=>{
        const authData = {
            ...data
        };
        dispatch(authStart());
        if(!authData.isSignUp){
            firebase.auth().createUserWithEmailAndPassword(authData.email, authData.password).catch((err)=>{
                let code=err.code;
                if(code==="auth/email-already-in-use"){
                    console.log(err)
                    dispatch(setRedirectPath('/login'));
                    dispatch(authFail("The user email exists already"))
                } 
                return 

            });

        }else{
            firebase.auth().signInWithEmailAndPassword(authData.email, authData.password).catch(function(error) {
                let code=error.code;
                console.log(error);
                if(code==="auth/user-not-found"){

                    dispatch(setRedirectPath('/signup'));    
                    dispatch(authFail("There is no user record corresponding to this identifier. The user may have been deleted"))
                }else {

                    dispatch(authFail('The password is invalid.'))
                }
                return 

            });

        }
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                // User is signed in.
                console.log(user)

                dispatch(authSuccess());
            } else {
                // No user is signed in.
                console.log("auth fail")
                
            }
        });





    }
}

export const setRedirectPath=(path)=>{
    return {
        type: actionTypes.SET_REDIRECT_PATH,
        path:path
    }
}

