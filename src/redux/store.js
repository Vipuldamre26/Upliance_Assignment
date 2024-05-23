import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import formSlice from "./slices/formSlice";

const store = configureStore({
    reducer: {
        counter: counterSlice,
        form: formSlice,
        
    }
});

export default store;