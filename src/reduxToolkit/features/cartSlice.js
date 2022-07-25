import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
    },
    reducers: {
        addCart: (state, action) => {
            const cart = [...state.cart];
            const productIndex = state.cart.findIndex(
                (x) => x.id === action.payload.id
            );
            productIndex !== -1
                ? (cart[productIndex] = action.payload)
                : cart.push(action.payload);
            return { ...state, cart };
        },

        deleteCart: (state, action) => {
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload),
            };
        },
    },
});

export const { addCart, deleteCart } = cartSlice.actions;

// Selectors
export const selectCart = (state) => state.cart.cart;


export default cartSlice.reducer;
