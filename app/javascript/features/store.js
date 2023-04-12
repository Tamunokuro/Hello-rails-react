import { configureStore } from "@reduxjs/toolkit";
import greetingSlice from "./greetSlice";

const store = configureStore({
    reducer: {
        greeting: greetingSlice,
    }
})

export default store;
