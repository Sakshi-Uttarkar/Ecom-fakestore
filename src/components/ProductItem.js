import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addCart } from "../redux/action";
import { useEffect } from "react";


export default function ProductItem({ product }) {
    const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    localStorage.setItem("Cartdata", JSON.stringify(product));
  }, [product]);

 
  return (
    <>
      <div className="col-md-3 mb-4">
        <div class="card h-100 text-center p4" key={product.id}>
          <img
            src={product.image}
            class="card-img-top"
            alt={product.title}
            height="250px"
            style={{objectFit:"contain"}}
          />
          <div class="card-body">
            <h5 class="card-title mb-0">{product.title.substring(0, 12)}...</h5>
            <p class="card-text lead fw-bold">${product.price}</p>
            <NavLink
            className="btn btn-outline-dark" 
            style={{width:"200px", height:"50px", marginBottom:"25px",borderRadius:"20px"}}
              to={`/products/${product.id}`}
              class="btn btn-outline-dark"
            >
              Buy Now
            </NavLink>
            <button
              className="btn btn-outline-dark px-4 py-2"
              onClick={() => addProduct(product)}
              style={{
                width: "200px",
                borderRadius:"20px",
                height: "50px",
                paddingBottom: "10px",
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
