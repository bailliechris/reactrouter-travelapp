import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counter";
import basketReducer from "../slices/basket"

const app_store = configureStore({
    reducer: {
        counter: counterReducer,
        basket: basketReducer
    }
});

export default app_store;