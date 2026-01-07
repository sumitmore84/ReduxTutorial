import { createSlice, nanoid } from "@reduxjs/toolkit"; 
import {addTodo as AddTodo, removeTodo as RemoveTodo, updateTodo as UpdateTodo} from './reducer.js'
const initialState = {
    todos: [{id: 1, text: "hello world"}]
}


export  const todoSlice = createSlice({
    name:   'todo',
    initialState,
    reducers: {
         addTodo : AddTodo,
         removeTodo: RemoveTodo,
         updateTodo: UpdateTodo
    }
})

export default todoSlice.reducer;

export const { addTodo, removeTodo, updateTodo} = todoSlice.actions