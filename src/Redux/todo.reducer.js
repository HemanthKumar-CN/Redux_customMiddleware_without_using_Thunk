import { ADD_TODOS_FAILURE, ADD_TODOS_SUCCESS, ADD_TODO_REQUEST, GET_TODOS_FAILURE, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "./todo.actionTypes"

const initState = {
    todos:[],
    isLoading: false,
    isError: false
}


export const reducer =(state=initState, {type,payload})=>
{
    switch(type)
    {
        case GET_TODOS_REQUEST:{
            return {
                ...state,
                isLoading:true,
                isError:false
            }
        }
        case GET_TODOS_SUCCESS:{
            return {
                ...state,
                todos:payload,
                isLoading:false,
                isError:false
            }
        }
        case GET_TODOS_FAILURE:{
            return {
                ...state,
                isLoading:false,
                isError:true
            }
        }

        case ADD_TODO_REQUEST:{
            return{
                ...state,
                // todos: [...state.todos, payload]
                isLoading:true,
                isError:false
            }
        }
        case ADD_TODOS_SUCCESS:{
            return {
                ...state,
                todos:[...state.todos, payload],
                isLoading:false,
                isError:false
            }
        }
        case ADD_TODOS_FAILURE:{
            return {
                ...state,
                isLoading:false,
                isError:true
            }
        }
        default :{
            return state
        }
    }
}
