import { configureStore } from "@reduxjs/toolkit";
import user from "./store/slices/userSlice";

export default configureStore({
    reducer: {
        user: user.reducer,
    },
});
