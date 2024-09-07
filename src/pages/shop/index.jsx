import React, { useState, useEffect } from "react";
import Categories from "./categories";
import ProductList from "./products/productlist";
import { fetchProducts } from "../../services/products/productsapi";

export default function Shop() {
  const [products, setProducts] = useState(null);
  const [category, setCategory] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchProducts(category);
      console.log("RESULTS: ", result);
      setProducts(result);
    };

    fetchData();
  }, [category]);

  return (
    <>
      <Categories setCategory={setCategory} />
      <ProductList products={products} />
    </>
  );
}
