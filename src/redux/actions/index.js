import callApi from "../../api";
export const GET_ALL_PRODUCT = "GET_ALL_PRODUCT";
export const ADD_CART = "ADD_CART";
export const DELETE_CART = "DELETE_CART";
export const LOGIN = "LOGIN";

export const fetchProductsRequest = () => {
  return async (dispatch) => {
    const res = await callApi("products", "GET", null);
    dispatch(GetAllProduct(res.data));
  };
};

/*GET_ALL_PRODUCT*/
export function GetAllProduct(payload) {
  return {
    type: "GET_ALL_PRODUCT",
    payload,
  };
}

export function AddCart(payload) {
  return {
    type: "ADD_CART",
    payload,
  };
}

export function DeleteCart(payload) {
  return {
    type: "DELETE_CART",
    payload,
  };
}

export function LoginEvent() {
  return {
    type: "LOGIN"
  };
}
