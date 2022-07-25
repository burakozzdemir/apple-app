import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectCart } from "../redux/reducers";

const Cart = () => {
  const cart = useSelector(selectCart)

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
