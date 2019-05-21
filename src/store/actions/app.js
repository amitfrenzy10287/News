import * as actionTypes from './actionTypes';
import axios from 'axios';

export const setData = (data)=>{
   return{
       type:actionTypes.GET_DATA,
       data,
   }
}


export const setDataId = (data) =>{
    return {
        type: actionTypes.GET_DATA_ID,
        data
    }
}

export const getAllData =()=>{
    return dispatch => {
        axios.get('https://jsonplaceholder.typicode.com/todos/')
            .then((response)=> response)
            .then((resp) => {
                dispatch(
                    setData(resp.data)
                )
            });
    }
}
export const getDatabyId =(id)=>{
    return dispatch => {
        axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then((response)=> response)
            .then((resp) => {
                dispatch(
                    setDataId(resp.data)
                )
            });
    }
}