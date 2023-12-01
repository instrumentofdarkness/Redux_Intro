// store here

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter";
import productReducer from "./slices/product";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        product: productReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;