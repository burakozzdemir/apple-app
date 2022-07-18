import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import callApi from "../api/index";
import { AddCart } from "../redux/actions";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const cart = useSelector((state) => state.shop.cart);
  const dispatch = useDispatch();

  const handleAddToCard = () => {
    dispatch(AddCart(product));
  };

  const updateQuantity = (evt) => {
    let quantity = product.quantity;
    evt === "increase" ? (quantity = quantity + 1) : (quantity = quantity - 1);
    setProduct({
      ...product,
      quantity: quantity > 0 && quantity <= 10 ? quantity : product.quantity,
    });
  };

  useEffect(() => {
    callApi(`products?id=${id}`, "GET", null).then((response) => {
      if (response.data) {
        const item = cart.find((x) => x.id === response.data[0].id)
        setProduct(
          response.data && {
            ...response.data[0],
            quantity: item ? item.quantity : 1,
          }
        );
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderProductDetails = () => {
    return (
      <div className="product my-5 py-3 mx-4" key={product.id}>
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center mx-auto item">
            <img
              src={product.img}
              alt={product.title}
              style={{ height: 350 }}
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className="display-6 fw-normal">{product.title}</h1>
            <hr />
            <h2 className="my-2">{product.price} </h2>
            <p className="lead text-muted"> {product.desc} </p>
            <div className="quantity-wrapper">
              <button
                onClick={() => updateQuantity("increase")}
                className="btn btn-primary"
              >
                +
              </button>
              <span>{product.quantity}</span>
              <button
                onClick={() => updateQuantity("decrease")}
                className="btn btn-primary"
              >
                -
              </button>
            </div>
            <button
              onClick={() => handleAddToCard()}
              className="btn btn-primary"
            >
              Add to Card
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="container-py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="my-3">Products</h2>
            <hr />
          </div>
        </div>
      </div>
      <div></div>
      <div>{product ? renderProductDetails() : ""}</div>
    </>
  );
};

export default ProductDetail;
