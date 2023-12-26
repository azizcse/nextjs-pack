import {createSlice, nanoid} from "@reduxjs/toolkit";

const initialState = {
    users: []
}

const UserSlice = createSlice({
    name: "user-slice",
    initialState,
    reducers: {
        addUser: (state, action) => {
            console.log("User name:" + action.payload);
            const data = {
                id: nanoid(),
                name: action.payload
            }
            state.users.push(data);
        },
        removeUser: (state, action) => {
            const data = state.users.filter((item) => {
                return item.id !== action.payload;
            })
            state.users = data
        }
    }
})

export const {addUser, removeUser} = UserSlice.actions;

export default UserSlice.reducer;