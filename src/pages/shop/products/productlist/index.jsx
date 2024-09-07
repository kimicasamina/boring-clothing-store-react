import React, { useEffect, useState } from "react";
import Product from "../product";

export default function ProductList({ products }) {
  if (!products) return <h1>Loading...</h1>;

  return (
    <ul className="cards">
      {products.map((product) => (
        <li key={product.id}>
          <Product product={product} />
          {/* <Link href={`/products/${product.permalink}`}>
              <a>
              </a>
            </Link> */}
        </li>
      ))}
    </ul>
  );
}
