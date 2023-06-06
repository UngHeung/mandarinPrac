import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
    name: "user",
    initialState: {
        myName: "비회원",
    },
    reducers: {
        setUserName(state, action) {
            state.myName = action.payload;
        },
    },
});

export let { setUserName } = user.actions;

export default configureStore({
    reducer: {
        user: user.reducer,
    },
});
