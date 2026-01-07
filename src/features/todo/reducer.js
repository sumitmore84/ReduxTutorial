import { nanoid } from "@reduxjs/toolkit"

export const addTodo = (state , action) =>{
    const todo = {
        id: nanoid(),
        text: action.payload
    }
    state.todos.push(todo);
}

export const removeTodo = (state, action) =>{
        state.todos = state.todos.filter((todo) => todo.id !== action.payload)
}

export const updateTodo = (state, action) => {
    const {id, text } = action.payload;
    state.todos = state.todos.map( (todo) => {
        if (todo.id == id)
        {
            return {...todo , text: text}
        }
        else 
        {
            return todo;
        }
    } ) 
} 
