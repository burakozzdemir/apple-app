import { GET_ALL_PRODUCT, ADD_CART, DELETE_CART, LOGIN } from "../actions";

const initProduct = {
  cart: [],
  products: [],
  isLogin: false,
};

function todoProduct(state = initProduct, action) {
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
const InnovanceApp = {
  reducer: {
    shop: todoProduct,
  },
};
export default InnovanceApp;
