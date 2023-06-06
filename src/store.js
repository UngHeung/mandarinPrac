import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
    name: "user",
    initialState: {
        userName: "비회원",
    },
    reducers: {
        setName(state, action) {
            state[0].userName = action.payload;
        },
    },
});

export let { setName } = user.actions;

export default configureStore({
    reducer: {
        user: user.reducer,
    },
});
