import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Product from "../pages/Product";
import ProductDetail from "../pages/ProductDetail";
import AddCart from "../pages/AddCart";
import Checkout from "../pages/Checkout";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectLogin } from "../reduxToolkit/features/loginSlice"

const CheckoutGuard = ({ children }) => {
  const login = useSelector(selectLogin)
  let location = useLocation();

  if (!login) {
    return <Navigate to="/login" login={{ from: location }} replace />;
  }

  return children;
};

const Layout = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="addcart" element={<AddCart />} />
        <Route
          path="addcart/checkout"
          element={
            <CheckoutGuard>
              <Checkout />
            </CheckoutGuard>
          }
        />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
};

export default Layout;
