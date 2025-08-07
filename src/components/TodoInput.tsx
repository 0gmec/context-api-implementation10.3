import {useState} from 'react'

export default function TodoInput() {
    const [addTodo, setAddTodo]= useState ("")
    // handler
   const handleButton= (e:React.FormEvent)=> {
e.preventDefault()
   }
   return (
    <div>
        <form onSubmit= {handleButton}>
        <input onChange={(e)=> setAddTodo(e.target.value)}
        type="text"
        value={addTodo}
        placeholder="Add New Todos"/>
        <button type="submit">Add Todo</button>
        </form>
    </div>
   )
}