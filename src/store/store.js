import { configureStore } from "@reduxjs/toolkit";
import borrowedReducer from "../features/borrowed/borrowedSlice";

const store = configureStore({
    reducer: {
        borrowed: borrowedReducer,
        // Add other reducers here
    }
});

export default store;