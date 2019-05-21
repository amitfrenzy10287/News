import * as actionTypes from './actionTypes';
import axios from 'axios';

export const auth =(token)=>{
    return{
        type: actionTypes.SET_LOGIN,
        token
    }
};

export const authFail =(error)=>{
    return{
        type: actionTypes.LOGIN_FAIL,
        error
    }
};

export const logout =()=>{
    return{
        type: actionTypes.LOGOUT
    }
};

export const login =(data)=>{
    const username = data.username ? data.username : '';
    const password = data.password ? data.password : '';
    const headers = {
        'Content-Type': 'application/json'
    };
    return dispatch =>{
    axios.get(`http://localhost:8080/user/login?username=${username}&password=${password}`,{headers}).
        then(resp=>resp)
        .then((res)=>{
            dispatch(auth(res.data.token));
        }).catch((error)=>{
            dispatch(authFail(error));
        });
    }
};