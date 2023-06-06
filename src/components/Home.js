import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="Hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="/assets/bg.jpg"
          className="card-img"
          alt="background"
          height="650px"
        />
        <div className="card-img-overlay d-flex flex-column ">
          <div className="container">
            <h5
              className="card-title display-3 fw-bolder mb-0"
              style={{ color: "black", textAlign: "center" }}
            >
              NEW SEASON ARRIVALS
            </h5>
            <p
              className="card-text lead fs-2"
              style={{ color: "black", textAlign: "center" }}
            >
              CHECK OUT ALL THE TRENDS
            </p>
          </div>
        </div>
      </div>
      <Products />
      
    </div>
  );
};
export default Home;
