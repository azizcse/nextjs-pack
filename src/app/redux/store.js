import {configureStore} from "@reduxjs/toolkit"
import UserSlice from "./slice"
import todoReducer from './todoSlice'
import counterSlice from "./counterSlice";

export const store = configureStore({
    reducer: {
        usersData: UserSlice,
        todosData: todoReducer,
        counter: counterSlice,
    }
});