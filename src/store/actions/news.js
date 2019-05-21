import * as actionTypes from './actionTypes';
import axios from 'axios';

export const setNews =(news)=>{
    return{
        type: actionTypes.GET_NEWS,
        news
    }
};

export const newsAddSuccess =(news)=>{
    return{
        type: actionTypes.ADD_NEWS,
        news
    }
};

export const newsAddStart =()=>{
    return{
        type: actionTypes.ADD_NEWS_START

    }
};

export const newsAddFail =(error)=>{
    return{
        type: actionTypes.ADD_NEWS_FAIL,
        error
    }
};


export const getNews =( token )=>{
    debugger;
    return dispatch =>{
        const config = {
            header:{
                "Content-type": "application/json",
                "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjpbeyJpZCI6MSwiZmlyc3RuYW1lIjoiQWRtaW4iLCJsYXN0bmFtZSI6IkFkbWluIiwiZW1haWwiOiJhbWl0QGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiYWRtaW4iLCJwYXNzd29yZCI6ImFkbWluQDEyMyIsInVzZXJfdHlwZSI6ImFkbWluIiwiY3JlYXRlZF9hdCI6IjIwMTgtMTItMjNUMDY6MTI6MTQuMDAwWiJ9XSwiaWF0IjoxNTU2NDU4NDI1LCJleHAiOjE1NTkwNTA0MjV9.Kh5JUVoRY7_a7uiQmXvU9Y0JfVNkO28S_-sGR3AZY6c",
            }
        };
        axios.get('http://localhost:8080/news/sortedNews/1', config )
            .then((resp)=>resp)
            .then((res)=>{
               dispatch( setNews(res.data) )
            });
    }
}

export const addNews = (news,token) =>{
    debugger;
    console.log('token',token);
       const headers ={
            "Content-type": "application/json",
            'access_token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjpbeyJpZCI6MSwiZmlyc3RuYW1lIjoiQWRtaW4iLCJsYXN0bmFtZSI6IkFkbWluIiwiZW1haWwiOiJhbWl0QGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiYWRtaW4iLCJwYXNzd29yZCI6ImFkbWluQDEyMyIsInVzZXJfdHlwZSI6ImFkbWluIiwiY3JlYXRlZF9hdCI6IjIwMTgtMTItMjNUMDY6MTI6MTQuMDAwWiJ9XSwiaWF0IjoxNTU2NDU4NDI1LCJleHAiOjE1NTkwNTA0MjV9.Kh5JUVoRY7_a7uiQmXvU9Y0JfVNkO28S_-sGR3AZY6c",
        };

    return dispatch =>{
           dispatch(newsAddStart())
        axios.post('http://localhost:8080/news',  news , {headers:headers})
            .then((res)=>res)
            .then((resp)=>{
                dispatch(newsAddSuccess(resp.data));
            }).catch((error)=>{
                dispatch(newsAddFail(error));
            })
    }
}