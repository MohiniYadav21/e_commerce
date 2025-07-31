import React, { useState } from "react";
import "./Nav.css";
import { Search, ShoppingCart } from "lucide-react";
import { Link, useNavigate } from "react-router";

const Nav = () => {
  const [searchterm, setSearchterm] = useState("");
  const navigate = useNavigate();
  
    const handleSearch = (e) => {
    e.preventDefault();
    if (searchterm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchterm)}`);
    }
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link to="/">
        <h1>StuffSuss</h1>
        </Link>
      </div>

      <div className="nav-component">
        <ul>
          <li>Brands</li>
         <Link to='/'> <li>Shop</li></Link>
          <Link to='/blog'><li>Blog</li></Link>
          <Link to='/login'><li>Login</li></Link>
        </ul>
      </div>
      <div className="nav-search">
        <form onSubmit={handleSearch} className="flex items-center justify-center gap-4">
        <input
          value={searchterm}
          onChange={(e) => setSearchterm(e.target.value)}
          type="text"
          className="bg-white border-2 border-black px-3 py-2 rounded-2xl"
        />
        <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded-2xl hover:bg-gray-800"
          >
            <Search size={25} />
          </button>
        </form>
        <ShoppingCart size={30} />
      </div>
    </div>
  );
};

export default Nav;
