import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar({ isUserLogin }) {
  const state = useSelector((state) => state.handleCart);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            LA COLLECTION
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
              {isUserLogin ? (
                <>
                  <NavLink to="/login" className="btn btn-outline-dark">
                    <i className="fa fa-sign-in me-1"></i> Login
                  </NavLink>
                  <NavLink to="/register" className="btn btn-outline-dark ms-2">
                    <i className="fa fa-user-plus me-1"></i> Register
                  </NavLink>
                </>
              ) : (
                "Hi Sakshi"
              )}
              {!isUserLogin && (
                <div className="btn-group">
                  <button
                    type="button"
                    class="btn btn-outline-dark dropdown-toggle dropdown-toggle-split"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="visually-hidden">Toggle Dropdown</span>
                  </button>

                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/">
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              )}
              <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-1"></i> Cart (
                {state.length})
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
