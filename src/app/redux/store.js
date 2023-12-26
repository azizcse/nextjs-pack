import {configureStore} from "@reduxjs/toolkit"
import UserSlice from "./slice"
import todoReducer from './todoSlice'

export const store = configureStore({
    reducer: {
        usersData: UserSlice,
        todosData: todoReducer
    }
});