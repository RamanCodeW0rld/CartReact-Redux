import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/cart/CartSlice';
import modalReducer from './features/cart/modal/modalSlice';
export const store = configureStore({
    reducer: {
        cartReducer,
        modalReducer
    }
})