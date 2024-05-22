import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: { data: 0 },
    reducers: {
        increment: (state) => {
            state.data = state.data + 1
        },
        decrement: (state) => {
            if(state.data > 0){
                state.data = state.data - 1
            }
        },
        reset: (state) => {
            state.data = 0
        }  
    }
})

export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;