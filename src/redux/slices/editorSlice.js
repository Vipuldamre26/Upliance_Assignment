import { createSlice } from "@reduxjs/toolkit";


let oldEditorData = '';


const getOldData = () => {

    if (localStorage.getItem('editorData') === null) {
        localStorage.setItem('editorData', JSON.stringify(''));
    }
    else {
        oldEditorData = localStorage.getItem('editorData');
    }

    return oldEditorData;

}

let getData = getOldData();


const editorSlice = createSlice({
    name: 'editor',
    initialState: { data: getData },
    reducers: {
        submitEditorData: (state, action) => {
            state.data = action.payload
        }
    }
})

export const { submitEditorData } = editorSlice.actions;

export default editorSlice.reducer;
