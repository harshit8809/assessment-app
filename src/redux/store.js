import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "./slices/fetchApi"


export const store = configureStore({
    reducer:{
        getApi: apiReducer
    }
})