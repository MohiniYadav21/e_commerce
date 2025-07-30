import React from "react";
import "./Nav.css";
import { Search, ShoppingCart } from "lucide-react";

const Nav = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <h1>StuffSuss</h1>
      </div>

      <div className="nav-component">
        <ul>
          <li>Brands</li>
          <li>Shop</li>
          <li>Blog</li>
          <li>Login</li>
        </ul>
      </div>
      <div className="nav-search">
        <Search size={30} />
        <ShoppingCart size={30} />
      </div>
    </div>
  );
};

export default Nav;
