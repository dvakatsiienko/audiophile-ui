/* Core */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const initialState: CounterState = {
    count: 0,
};

export const counterSlice = createSlice({
    name:     'counter',
    initialState,
    reducers: {
        increment: state => {
            state.count += 1;
        },
        decrement: state => {
            state.count -= 1;
        },
        incrementBy: (state, action: PayloadAction<number>) => {
            state.count += action.payload;
        },
    },
});

/* Types */
export interface CounterState {
    count: number;
}
