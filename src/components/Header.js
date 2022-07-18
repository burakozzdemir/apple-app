import React from "react";
import { NavLink, Link } from "react-router-dom";
import AppleIcon from "@mui/icons-material/Apple";
import Cart from "./Cart";

const Header = () => {
  return (
    <header className="header">
      <div className="header_content">
        <h2 className="header_content_logo">
          <NavLink to="/home">
            <AppleIcon className="header_apple_logo" />
          </NavLink>
        </h2>
        <nav className="header_content_nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <NavLink to="/login">
                <button>Login</button>
              </NavLink>
            </li>
            <li>
              <Cart />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
