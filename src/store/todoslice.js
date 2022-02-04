import {createSlice} from "@reduxjs/toolkit";

export const toDoSlice = createSlice({
    name: 'toDo',
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            return [...state, action.payload];
        },
        changeStatus(state, action) {
            state.map(task => task.id === action.payload ? task.status = !task.status : task);
            console.log(action.payload);
        },
        deleteTask(state, action) {
            return state.filter(task => task.id !== action.payload)
        },

    }
})
export const {addTask, changeStatus, deleteTask, completedCount} = toDoSlice.actions;
const toDoReducer = toDoSlice.reducer;
export default toDoReducer