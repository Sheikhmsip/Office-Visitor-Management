/* eslint-disable no-unused-vars */
import React from "react";
import './Navbar.css'
import logo from "../../../assets/Logo 2.png"
import ActiveLink from "../ActiveLink/ActiveLink";
import { Link } from "react-router-dom";

const Navbar = () => {
    const navItems =  <>
        <li>
        <ActiveLink to="/">Home</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/about">About Us</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/contact">Contact Us </ActiveLink>
      </li>
      </>
    
  return (
    <div className="bg-gradient-to-r from-black via-blue-950 to-purple-950 text-white">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-blue-400 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {/* nav items */}
              {navItems}
            </ul>
          </div>
          <a className="w-56"> <img src={logo} alt="" /></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1">
            {/* Nav Items */}
            {navItems}
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/visitor" className="btn">Visitor</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
