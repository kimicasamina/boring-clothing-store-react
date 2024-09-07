import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="h-auto w-full max-w-screen-desktop flex justify-between items-center py-8 px-20">
      <div className="branding w-[140px] ">
        <p className="text-md">Boring Clothing</p>
      </div>

      <ul className="flex-1 flex justify-center gap-x-7">
        <Link to="/">
          <li className="">Home</li>
        </Link>
        <Link to="/shop">
          <li className="">Shop</li>
        </Link>
        <Link to="/company">
          <li className="">Company</li>
        </Link>
        <Link to="/collections">
          <li className="">Collections</li>
        </Link>
      </ul>

      <div className="w-[140px] flex justify-end">
        <FaShoppingCart className="w-6 h-6 " />
      </div>
    </nav>
  );
}
