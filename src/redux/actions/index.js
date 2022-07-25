import callApi from "../../api/callApi"

export const ProductsRequest = () => {
  return async (dispatch) => {
    const res = await callApi("products", "GET", null);
    dispatch(getAllProduct(res.data));
  };
};

export const getAllProduct = (payload) => {
  return {
    type: "GET_ALL_PRODUCT",
    payload,
  }
}

export const addCart = (payload) => {
  return {
    type: "ADD_CART",
    payload,
  };
}

export const deleteCart = (payload) => {

  return {
    type: "DELETE_CART",
    payload,
  };
}

export const loginEvent = () => {
  return {
    type: "LOGIN"
  };
}
