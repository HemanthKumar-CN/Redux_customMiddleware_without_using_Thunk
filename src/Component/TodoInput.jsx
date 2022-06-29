import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoFailure, addTodoRequest, addTodoSuccess } from '../Redux/todo.action';


const TodoInput = () => {

    const dispatch = useDispatch();

    const [query, setQuery] = useState("")

    const handleAdd = () => {
        const payload = {
            title: query,

        }
        
        dispatch(addTodoRequest());
        axios.post("/todos", payload)
        .then((r)=> dispatch(addTodoSuccess(r.data)))
        .catch(err=> dispatch(addTodoFailure()))


        setQuery("")
    }


  return (
    <div>
        <input type="text" value={query} onChange={(e)=> setQuery(e.target.value)} placeholder='Add todo' />
        <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default TodoInput