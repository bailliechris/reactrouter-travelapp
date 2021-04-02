import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counter";

const app_store = configureStore({
    reducer: {
        counter:counterReducer
    }
});

export default app_store;