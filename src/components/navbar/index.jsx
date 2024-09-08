import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { fetchCart } from "../../services/carts/cartsapi";
import { GlobalContext } from "../../context/globalProvider";

export default function Navbar() {
  const { cart } = useContext(GlobalContext);

  return (
    <nav className="min-h-[120px] w-full max-w-screen-desktop flex justify-between items-center py-8 px-8 tablet:py-20 tablet:px-20">
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
        <Link to={"/cart"} className="btn cart__btn ">
          {cart?.line_items.length ? (
            <div className="cart__count text-light-base text-sm">
              {cart?.total_items}
            </div>
          ) : null}
          <FaShoppingCart className="w-4 h-4 left-2 top-2 z-10 absolute text-light-base" />
        </Link>
      </div>
    </nav>
  );
}
