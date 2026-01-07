import { configureStore } from "@reduxjs/toolkit";
import todoReducer, {todoSlice}  from '../features/todo/todoSlice.js'
export const store = configureStore({
    reducer: todoReducer
})
