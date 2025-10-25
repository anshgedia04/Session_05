import { configureStore } from "@reduxjs/toolkit";
import {todoSlice} from "../Redux/TodoSlice"

export const store = configureStore({
    reducer: {
        todo : todoSlice.reducer
    }
});