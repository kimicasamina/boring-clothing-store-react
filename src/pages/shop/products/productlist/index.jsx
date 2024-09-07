import React, { useContext, useEffect, useState } from "react";
import Product from "../product";
import { GlobalContext } from "../../../../context/globalProvider";

export default function ProductList({ products, addToCart, filteredProducts }) {
  if (!products) return <h1>Loading...</h1>;
  console.log("FILTERED: ", filteredProducts);

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
