import { GET_ALL_PRODUCT, ADD_CART, DELETE_CART, LOGIN } from "../constants/actiontypes";

const initialState = {
  cart: [],
  products: [],
  isLogin: false,
};

const todoApp = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCT:
      return {
        ...state,
        products: action.payload,
      };
    case ADD_CART:
      const cart = [...state.cart];
      const productIndex = state.cart.findIndex(
        (x) => x.id === action.payload.id
      );
      productIndex !== -1
        ? (cart[productIndex] = action.payload)
        : cart.push(action.payload);
      return { ...state, cart };
    case DELETE_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case LOGIN:
      return {
        ...state,
        isLogin: true,
      };
    default:
      return state;
  }
}

//Selectors 
export const selectCart = (state) => state.shop.cart;
export const selectProducts = (state) => state.shop.products;
export const selectLogin = (state) => state.shop;

const appleApp = {
  reducer: {
    shop: todoApp,
  },
};
export default appleApp;

