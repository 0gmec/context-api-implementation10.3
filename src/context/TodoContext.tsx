import React from 'react';
import type {TodoItems}  from '../types';
 

export const TodoContext = React.createContext({
    todos: [
{
    id: 1,
    text: "Fold-clothes",
    completed: false,
},
{
    id: "Task-2",
    text: "Cook",
    completed: true,

},
{
    id: 3,
    text: "Pet-shopping",
    completed: true,
},
{
    id: 4,
    text: "Meltdown",
    completed: false,
}
   ],
   addToDo : (text: string) => {},
   toggleTodo: (id: string | number)=> {},
   deleteTodo: (id: string | number)=> {},
   editTodo: (id: string | number, newText: string)=> {},
   clearCompleted: ()=> {}

})
