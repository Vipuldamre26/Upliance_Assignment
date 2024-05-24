import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import formSlice from "./slices/formSlice";
import editorSlice from "./slices/editorSlice";

const store = configureStore({
    reducer: {
        counter: counterSlice,
        form: formSlice,
        editor: editorSlice,
        
    }
});

export default store;