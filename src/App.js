import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";
import Contact from "./components/Contact";
import About from "./components/About";
import Cart from "./components/Cart";
import Login from "./components/buttons/Login";
import Register from "./components/buttons/Register";
import Checkout from "./components/Checkout";
import React, { useState } from "react";
import Previewpage from "./components/Previewpage";

function App() {
  const [isUserLogin, setIsUserLogin] = useState(true);

  return (
    <>
      {" "}
      <Router>
        <Navbar isUserLogin={isUserLogin} />{" "}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />{" "}
          <Route path="/products/category/:category" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />{" "}
          <Route
            path="/login"
            element={
              <Login
                setIsUserLogin={setIsUserLogin}
                isUserLogin={isUserLogin}
              />
            }
          />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/previewpage" element={<Previewpage />} />
        </Routes>{" "}
      </Router>{" "}
    </>
  );
}

export default App;
