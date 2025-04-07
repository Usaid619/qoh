import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from './categorySlice'
import recommendedReducer from './recommendedSlice'

const appStore = configureStore({
    reducer:{
        category:categoryReducer,
        recommendeds:recommendedReducer
    }
})

export default appStore