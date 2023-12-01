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
        incrementByTwo: (byTwo, actions) => {
            console.log (actions.payload, "actions.payload")
        byTwo.value = byTwo.value + actions.payload;
        }
    },
    });

    export const counterActions = counterSlice.actions;
    const counterReducer = counterSlice.reducer;
    export default counterReducer;