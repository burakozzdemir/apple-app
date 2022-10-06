import React from "react";
import AppleIcon from "@mui/icons-material/Apple";
import { NavLink, Link } from "react-router-dom";
import Cart from "./Cart";

const Header = () => {
  return (
    <header className="header">
      <div className="header_content">
        <NavLink to="home">
          <AppleIcon className="header_apple_logo" />
        </NavLink>
        <nav className="header_content_nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="products">Products</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
          </ul>
          <NavLink to="login">
            <button>Login</button>
          </NavLink>
          <Cart />
        </nav>
      </div>
    </header>
  );
};

export default Header;
