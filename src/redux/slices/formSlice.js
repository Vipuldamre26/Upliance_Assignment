import { createSlice } from "@reduxjs/toolkit";



const formSlice = createSlice({
    name: 'form',
    initialState: { data: [] },
    reducers: {
        submit: (state, action) => {
            state.data = action.payload
        }
    }
})

export const { submit } = formSlice.actions;

export default formSlice.reducer;