import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectProducts, productsRequest } from "../reduxToolkit/features/productsSlice";

const Product = () => {
  const products = useSelector(selectProducts)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderProducts = (item) => {
    return (
      <div className="card my-5" key={item.id} style={{ width: "18rem" }}>
        <img className="card-img-top" src={item.img} alt={item.title} />
        <div className="card-body text-center ">
          <h5 className="card-title">{item.title} </h5>
          <div className="lead py-2 "> $ {item.price} </div>
          <NavLink to={`/products/${item.id}`} className="btn btn-primary">
            Buy Now
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="my-3">Products</h2>
            <hr />
          </div>
        </div>
      </div>
      <div className="container bg-muted">
        <div className="row justify-content-around">
          {products.map(renderProducts)}
        </div>
      </div>
    </div>
  );
};

export default Product;
