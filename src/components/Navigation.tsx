import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="h-[50px] flex justify-between px-5 bg-blue-500 font-white items-center">
      <span className="font-bold">Online-Shop</span>
      <span>
        <Link to="/" className="mr-2">
          Start
        </Link>
        <Link to="/products" className="mr-2">
          Products
        </Link>
        <Link to="/about">About</Link>
      </span>
    </nav>
  );
}

export default Navigation;
