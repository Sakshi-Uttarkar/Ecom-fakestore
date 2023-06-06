import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteCart } from "../redux/action";
import { NavLink, useNavigate } from "react-router-dom";
import { updateProductQuantity } from "../redux/action";
import { updateProductQuantity1 } from "../redux/action";
import { getItemCart } from "../redux/action";

const Cart = () => {
  const navigate= useNavigate();
  const [totalPrice, setTotalprice] = useState(0);
  const { handleCart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleClose = (item) => {
    dispatch(deleteCart(item));
  };

  const setIncrease = (id) => {
    dispatch(updateProductQuantity(id));
  };

  const setDecrease = (id) => {
    dispatch(updateProductQuantity1(id));
  };

  const getCart = () => {
    if (localStorage.getItem("Cartdata") !== null) {
      dispatch(getItemCart(JSON.parse(localStorage.getItem("Cartdata"))));
    }
  };

  useEffect(() => {
    getCart();
  }, []);

  useEffect(() => {
    const total = handleCart.reduce((sum, item) => {
      return sum + item.qty * item.price;
    }, 0);

    console.log(total);

    setTotalprice(total);
  }, [handleCart]);

  const cartItems = (cartItem, qty) => {
    let tempPrice = 0;

    let sum = 0;

    return (
      <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
        <div className="container py-4">
          <button
            onClick={() => handleClose(cartItem)}
            className="btn-close float-end"
            aria-label="Close"
          ></button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img
                src={cartItem.image}
                alt={cartItem.title}
                height="200px"
                width="180px"
              />
            </div>
            <div className="col-md-4">
              <h3>{cartItem.title}</h3>
              <p className="lead fw-bold">${cartItem.price}</p>
            </div>
            <div className="col-md-4">
              <button
                style={{ paddingInline: "20px", marginRight: "20px" }}
                className="btn btn-outline-dark me-2"
                onClick={() => setDecrease(cartItem.id)}
              >
                -
              </button>
              {cartItem.qty}
              <button
                style={{ paddingInline: "20px", marginLeft: "10px" }}
                className="btn btn-outline-dark me-2"
                onClick={() => setIncrease(cartItem.id)}
              >
                +
              </button>
              <br />
              <h4 style={{ paddingTop: "120px", paddingLeft: "150px" }}>
                Sub Total :$
                {(tempPrice = cartItem.price * cartItem.qty)}
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };

  const totalCart = () => {
    return (
      <div>
        <h4>Total Price: ${totalPrice}</h4>
      </div>
    );
  };

  const button = () => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          width: "13%",
          paddingTop: "2%",
        }}
      >
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => navigate("/checkout")}
        >
          Proceed To checkout
        </button>
      </div>
    );
  };

  return (
    <>
      {handleCart.length === 0 && emptyCart()}
      {handleCart.length !== 0 && handleCart.map(cartItems)}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "80%",
          alignItems: "flex-end",
        }}
      >
        {handleCart.length !== 0 && totalCart()}
        {handleCart.length !== 0 && button()}
        {getCart}
      </div>
    </>
  );
};

export default Cart;
