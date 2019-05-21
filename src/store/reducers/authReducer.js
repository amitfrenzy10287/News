import * as actionTypes from  '../actions/actionTypes';

const initialState = {
    loading : false,
    result :[],
    token: '',
    loginMessage: ''
};

export const setLogin = (state,action) =>{
    return{
        ...state,token: action.token,loginMessage:'Auth Successful!'
    };
};

export const loginFail = (state,action) =>{
    return{
        ...state,loginMessage: action.error
    };
};

export const logout = (state,action) =>{
    return{
        ...state, token: ''
    };
};

const reducer =(state = initialState, action)=>{
    switch(action.type){
        case actionTypes.SET_LOGIN:
            return setLogin(state,action);
        case actionTypes.LOGIN_FAIL:
            return loginFail(state,action);
        case actionTypes.LOGOUT:
            return logout(state,action);
        default:
            return state;
    }
};

export default reducer;