import React, { useState, useEffect, useContext } from "react";
import Categories from "./categories";
import ProductList from "./products/productlist";
import { fetchProducts } from "../../services/products/productsapi";
import { GlobalContext } from "../../context/globalProvider";

export default function Shop() {
  const {
    products,
    addToCart,
    switchCategory,
    filteredProducts,
    setFilteredProducts,
  } = useContext(GlobalContext);

  return (
    <>
      <Categories
        products={products}
        setFilteredProducts={setFilteredProducts}
      />
      <ProductList
        products={products}
        addToCart={addToCart}
        filteredProducts={filteredProducts}
      />
    </>
  );
}
