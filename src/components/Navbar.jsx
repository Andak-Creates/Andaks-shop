import React from "react";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";

const Navbar = ({ cartState }) => {
  return (
    <div className="navBar">
      <h2 className="title">
        Andak's <small>Shop</small>
      </h2>

      <div className="navLinks">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">
          <i className="fa-solid fa-cart-shopping"></i>
          <small>{cartState.length}</small>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
