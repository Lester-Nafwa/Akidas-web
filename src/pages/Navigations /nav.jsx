import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-item">
        {" "}
        <Link to="/home">Home</Link>
      </div>
      <div className="dashboard-item">
        {" "}
        <Link to="/about">About Us </Link>
      </div>
      <div className="dashboard-item">
        {" "}
        <Link to="/products">Our Products</Link>
      </div>
      <div className="dashboard-item">
        {" "}
        <Link to="/contacts">Contact Us</Link>
      </div>
    </div>
  );
};

export default Nav;
