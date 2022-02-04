import {configureStore} from "@reduxjs/toolkit";
import toDoReducer from "./todoslice";

const store = configureStore({
    reducer: {
        todolist: toDoReducer
    }
})

export default store;