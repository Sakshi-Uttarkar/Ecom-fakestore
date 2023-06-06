import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

const LoginForm = ({ isUserLogin, setIsUserLogin }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem("email", email);

    localStorage.setItem("password", password);

    setEmail("");

    setPassword("");

    navigate("/");
    setIsUserLogin(!isUserLogin);
  };

  let email1 = localStorage.getItem("email");

  let password1 = localStorage.getItem("password");

  return (
    <div className="container">
    
      <div className="row justify-content-center">
       
        <div className="col-md-6">
          <form>
           
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-outline-dark"
              onClick={handleSubmit}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
