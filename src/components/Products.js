import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink, useNavigate, useParams } from "react-router-dom";
// import { addCart } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { FetchData } from "../redux/action/Action1";
import ProductItem from "./ProductItem";

export default function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { category } = useParams();

  const { ProductReducer } = useSelector((state) => state);

  useEffect(() => {
    dispatch(FetchData({ category }));
  }, [dispatch, category]);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {ProductReducer.loading ? (
            <Loading />
          ) : (
            <>
              <div className="buttons d-flex justify-content-center mb-5 pb-5">
                <NavLink to={("/products")} className="btn btn-outline-dark me-2">
                  All
                </NavLink>

                <NavLink
                  to="/products/category/men's clothing"
                  className="btn btn-outline-dark me-2"
                >
                  Men's Clothing
                </NavLink>

                <NavLink
                  to="/products/category/women's clothing"
                  className="btn btn-outline-dark me-2"
                >
                  Women's Clothing
                </NavLink>

                <NavLink
                  to="/products/category/jewelery"
                  className="btn btn-outline-dark me-2"
                >
                  Jewelery
                </NavLink>

                <NavLink
                  to="/products/category/electronics"
                  className="btn btn-outline-dark me-2"
                >
                  Electronics
                </NavLink>
              </div>
              {ProductReducer.products.map((product) => {
                return <ProductItem product={product} />;
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
