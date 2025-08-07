import { useState, useEffect } from 'react'
import TodoInput from './components/TodoInput'
import TodoItem from './components/TodoItem'
import './App.css'

function App() {
  const [todos, setTodos]= useState([])
  

  return (
    <>
    <div>
      <h2>Todo Management App</h2>
    </div>
      <TodoInput/>
      
    </>
  )
}

export default App
