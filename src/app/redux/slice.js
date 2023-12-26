import {createSlice, nanoid, createAsyncThunk, current} from "@reduxjs/toolkit";

const initialState = {
    users: JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [],
    userApiData: []
}

export const fetchApiUsers = createAsyncThunk("fetchApiUsers", async () => {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    return result.json();
});

const UserSlice = createSlice({
    name: "addUserSlice",
    initialState,
    reducers: {
        addUser: (state, action) => {
            console.log("User name:" + action.payload);
            const data = {
                id: nanoid(),
                name: action.payload
            }
            state.users.push(data);
            let userData = JSON.stringify(current(state.users));
            localStorage.setItem("users", userData)
        },
        removeUser: (state, action) => {
            const data = state.users.filter((item) => {
                return item.id !== action.payload;
            })
            state.users = data
            let userData = JSON.stringify(data);
            localStorage.setItem("users", userData)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchApiUsers.fulfilled, (state, action) => {
            state.isloading = false,
                state.userAPIData = action.payload
        })
    }
})

export const {addUser, removeUser} = UserSlice.actions;

export default UserSlice.reducer;