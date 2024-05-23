import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";


let oldData = [];

const getData  = () => {

    if(localStorage.getItem('userData') === null){
        localStorage.setItem('userData', JSON.stringify([]));
    }
    else{
        oldData = JSON.parse(localStorage.getItem('userData'));
        // console.log('====================================');
        // console.log('oldData', oldData);
        // console.log('====================================');
    }
    

    useEffect(() => {
        getData();
    }, [])
}

const formSlice = createSlice({
    name: 'form',
    initialState: { data: oldData },
    reducers: {
        submit: (state, action) => {
            state.data = action.payload
        }
    }
})

export const { submit } = formSlice.actions;

export default formSlice.reducer;