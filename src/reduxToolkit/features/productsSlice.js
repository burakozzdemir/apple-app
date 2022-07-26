import { createSlice } from "@reduxjs/toolkit";
import callApi from "../../api/callApi";

export const productsRequest = () => {
    return async (dispatch) => {
        const res = await callApi("products", "GET", null);
        dispatch(products(res.data));
    };
};

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
    },
    reducers: {
        products: (state, action) => {
            state.products = action.payload;
        },
    },
});

export const { products } = productsSlice.actions;

// Selectors
export const selectProducts = (state) => state.products.products;

export default productsSlice.reducer;
