import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";


let oldData = [];


const getOldData = () => {

    if (localStorage.getItem('userData') === null) {
        localStorage.setItem('userData', JSON.stringify([]));
    }
    else {
        oldData = JSON.parse(localStorage.getItem('userData'));
    }

    return oldData;

}

let getData = getOldData();


const formSlice = createSlice({
    name: 'form',
    initialState: { data: getData },
    reducers: {
        submit: (state, action) => {
            state.data = action.payload
        }
    }
})

export const { submit } = formSlice.actions;

export default formSlice.reducer;
