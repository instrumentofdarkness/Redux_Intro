// counter slice here

import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
    value: number;
    };

    const initialState: InitialState = {
    value: 0,
    };

    const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
        state.value += 1;
        },
        decrement: (random) => {
        random.value = random.value - 1;
        },
        incrementByTwo: (byTwo) => {
        byTwo.value = byTwo.value + 2;
        }
    },
    });

    export const actions = counterSlice.actions;
    const counterReducer = counterSlice.reducer;
    export default counterReducer;