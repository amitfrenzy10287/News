import * as actionTypes from '../actions/actionTypes'

const initialState ={
    loading: '',
    allNews:[],
    error: ''
};

export const getNews =(state,action)=>{
    return {
        ...state,allNews: action.news
    }
};

export const addNewsStart =(state)=>{
    return {
        ...state,loading:true
    }
};

export const addNewsFail =(state, action)=>{
    return {
        ...state,loading : false,
        error: action.error
    }
};


export const addNews =(state,action)=>{
    return {
        ...state, allNews: action.news,loading:false
    }
};

const reducer = (state = initialState, action)=>{
    switch (action.type) {
        case actionTypes.GET_NEWS:
            return getNews(state, action);
        case actionTypes.ADD_NEWS:
            return addNews(state, action);
        case actionTypes.ADD_NEWS_START:
            return addNewsStart(state);
        case actionTypes.ADD_NEWS_FAIL:
            return addNewsFail(state, action);
        default:
            return state;
    }
};

export default reducer;