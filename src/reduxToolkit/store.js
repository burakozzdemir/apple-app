import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import cartReducer from "./features/cartSlice";
import productsReducer from "./features/productsSlice";
import isLoginReducer from "./features/loginSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productsReducer,
        isLogin: isLoginReducer
    },
}, applyMiddleware(thunkMiddleware));
export default store;