import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Cart = () => {
  const cart = useSelector((state) => state.shop.cart);

  return (
    <div>
      <NavLink to="addcart">
        <button className="cart">
          <ShoppingCartIcon />
          <span className="cart-span"> {(cart).reduce((x, y) => x + y.quantity, null)} </span>
        </button>
      </NavLink>
    </div>
  );
};

export default Cart;
