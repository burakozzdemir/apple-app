import { createSlice } from "@reduxjs/toolkit";
import callApi from "../../api/callApi";

export const productsRequest = () => async (dispatch) => {
    const response = await callApi("products", "GET", null);
    dispatch(products(response.data));
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
