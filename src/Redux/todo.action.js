import axios from "axios"
import { GET_TODOS_REQUEST, GET_TODOS_SUCCESS,GET_TODOS_FAILURE, ADD_TODO_REQUEST, ADD_TODOS_SUCCESS, ADD_TODOS_FAILURE } from "./todo.actionTypes"


export const getTodoRequest = () => {
    return {
        
        type: GET_TODOS_REQUEST
    }
}

export const getTodoSuccess = (payload) => {
    return {
        
        type: GET_TODOS_SUCCESS,
        payload
        
    }
}

export const getTodos =  (dispatch)=>{
    dispatch(getTodoRequest())
    axios.get(`/todos`)
    .then(r=> dispatch(getTodoSuccess(r.data)))
    .catch(err=> dispatch(getTodoFailure()))
}

export const getTodoFailure = () => {
    return {
        
        type:GET_TODOS_FAILURE
    }
}


export const addTodoRequest = () => {
    return {
        
        type: ADD_TODO_REQUEST
    }
}

export const addTodoSuccess = (payload) => {
    return {
        
        type: ADD_TODOS_SUCCESS,
        payload
        
    }
}

export const addTodoFailure = () => {
    return {
        
        type: ADD_TODOS_FAILURE
    }
}