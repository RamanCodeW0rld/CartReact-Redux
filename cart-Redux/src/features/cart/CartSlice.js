import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
const initialState = {
    cartItems : cartItems,
    amount: 2,
    total: 0,
    isLoading: true
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,

    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
        },
        removeCart: (state,action) => {
            const id = action.payload;
          state.cartItems = state.cartItems.filter((data) => data.id !== id)
        },
        increase: (state, action) => {
            const id = action.payload;
            const cartItem = state.cartItems.find((item) => item.id === id)
            cartItem.amount = cartItem.amount + 1;
        },
        decrease: (state, action) => {
            const id = action.payload;
            const cartItem = state.cartItems.find((item) => item.id === id)
            cartItem.amount = cartItem.amount - 1;
        },
        cartTotal: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
               amount += item.amount;
               total += item.amount * item.price;
            });
            state.amount = amount;
            state.total = total;
        }
    }
})

export default cartSlice.reducer;
export const {clearCart} = cartSlice.actions;
export const {removeCart} = cartSlice.actions;
export const {decrease} = cartSlice.actions;
export const {increase} = cartSlice.actions;
export const {cartTotal} = cartSlice.actions;