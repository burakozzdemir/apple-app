import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DeleteCart } from "../redux/actions/index";

const AddCart = () => {
  const cart = useSelector((state) => state.shop.cart);
  const dispatch = useDispatch();

  const handleClose = (item) => {
    dispatch(DeleteCart(item.id));
  };

  const renderCarts = () => {
    return (
      <>
        {cart.map((item) => (
          <div className="px-4 my-5 bg-light rounded-3" key={item.id}>
            <div className="container py-4">
              <button
                onClick={() => handleClose(item)}
                className="btn-close float-end"
                aria-label="close"
              />
              <div className="row justify-content-center">
                <div className="col-md-4">
                  <img
                    src={item.img}
                    alt={item.title}
                    height="200px"
                    width="180px"
                  />
                </div>
                <div className="col-md-4">
                  <h3>{item.title}</h3>
                  <p className="lead fw-bold">Price: {item.price}</p>
                  <p className="lead fw-bold">Quantity: {item.quantity}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="container">
          <div className="row justify-content-center">
            <NavLink
              to="checkout"
              className="btn btn-outline-primary mb-5 w-25"
            >
              Proceed to Checkout
            </NavLink>
          </div>
        </div>
      </>
    );
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 py-5 bg-light rounded-3">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };

  return <>{cart.length === 0 ? emptyCart() : renderCarts()}</>;
};

export default AddCart;
