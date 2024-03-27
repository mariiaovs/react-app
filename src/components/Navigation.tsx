import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navigation() {
  const [activeLink, setActiveLink] = useState("start");
  const { isLoggedIn, login, logout } = useAuth();

  return (
    <nav className="h-[50px] flex justify-between px-5 bg-blue-400 font-white items-center">
      <span className="font-bold">Online-Shop</span>
      <span>
        <Link
          to="/"
          onClick={() => setActiveLink("start")}
          className={
            activeLink === "start"
              ? "border-b-4 border-white mr-2 px-3 py-1"
              : "mr-2 px-3 py-1"
          }
        >
          Start
        </Link>
        <Link
          to="/products"
          onClick={() => setActiveLink("products")}
          className={
            activeLink === "products"
              ? "border-b-4 border-white mr-2 px-3 py-1"
              : "mr-2 px-3 py-1"
          }
        >
          Products
        </Link>
        <Link
          to="/about"
          onClick={() => setActiveLink("about")}
          className={
            activeLink === "about"
              ? "border-b-4 border-white mr-2 px-3 py-1"
              : "mr-2 px-3 py-1"
          }
        >
          About
        </Link>
        {isLoggedIn ? (
          <Link
            to="/login"
            onClick={() => setActiveLink("login")}
            className={
              activeLink === "login"
                ? "border-b-4 border-white mr-2 px-3 py-1"
                : "mr-2 px-3 py-1"
            }
          >
            Login
          </Link>
        ) : (
          <Link
            to="/profile"
            onClick={() => setActiveLink("profile")}
            className={
              activeLink === "profile"
                ? "border-b-4 border-white mr-2 px-3 py-1"
                : "mr-2 px-3 py-1"
            }
          >
            Profile
          </Link>
        )}
      </span>
    </nav>
  );
}

export default Navigation;
