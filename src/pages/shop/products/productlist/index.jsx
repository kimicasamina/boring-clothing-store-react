import React, { useContext, useEffect, useState } from "react";
import Product from "../product";

export default function ProductList({ addToCart, products, filteredProducts }) {
  if (!products) return <h1>Loading...</h1>;
  // console.log("FILTERED: ", filteredProducts);

  // if (!filteredProducts) return <h1>Loading...</h1>;

  return (
    <ul className="cards">
      {filteredProducts
        ? filteredProducts.map((product) => (
            <li key={product.id}>
              <Product product={product} addToCart={addToCart} />
            </li>
          ))
        : products.map((product) => (
            <li key={product.id}>
              <Product product={product} addToCart={addToCart} />
            </li>
          ))}
    </ul>
  );
}
