import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodoFailure, getTodoRequest, getTodos, getTodoSuccess } from '../Redux/todo.action';

const TodoList = () => {

    const dispatch = useDispatch();

    const todos = useSelector(state=> state.todos)

    // const getTodos =()=>{
    //     dispatch(getTodoRequest())
    //     axios.get(`/todos`)
    //     .then(r=> dispatch(getTodoSuccess(r.data)))
    //     .catch(err=> dispatch(getTodoFailure()))
    // }

    // console.log(todos)
    useEffect(() => {
        dispatch(getTodos)
    //   getTodos()
    
      
      
    }, [])
    
  return (
    <div>
        <h3>TodoList</h3>
        {
            todos.map(t=> {
                return (
                    <div key={t.id}>{t.id}-{t.title}
                    <button>Del</button>
                    </div>
                )
            })
        }

    </div>
  )
}

export default TodoList