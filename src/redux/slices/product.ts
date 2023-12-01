// counter slice here

import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
    product: string;
    };

    const initialState: InitialState = {
    product: "bag",
    };

    const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        changeName: (state) => {
        state.product ="hello";
        },
        
    },
    });

    export const productActions = productSlice.actions;
    const productReducer = productSlice.reducer;
    export default productReducer;