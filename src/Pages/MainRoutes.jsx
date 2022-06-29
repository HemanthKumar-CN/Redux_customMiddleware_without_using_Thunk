import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Todo from '../Component/Todo'
import SingleTodo from './SingleTodo'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Todo/>} />
        <Route path='/:id' element={<SingleTodo/>} />
        
    </Routes>
  )
}

export default MainRoutes