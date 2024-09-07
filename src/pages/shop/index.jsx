import React, { useState, useEffect, useContext } from "react";
import Categories from "./categories";
import ProductList from "./products/productlist";
import { fetchProducts } from "../../services/products/productsapi";
import { GlobalContext } from "../../context/globalProvider";

export default function Shop() {
  const { products, addToCart, switchCategory, filteredProducts } =
    useContext(GlobalContext);
  // const [products, setProducts] = useState(null);
  // const [category, setCategory] = useState("");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await fetchProducts(category);
  //     console.log("RESULTS: ", result);
  //     setProducts(result);
  //   };

  //   fetchData();
  // }, [category]);

  // if (!products) {
  //   return <h1 className="">Loading Page...</h1>;
  // }

  return (
    <>
      <Categories switchCategory={switchCategory} />
      <ProductList
        products={products}
        addToCart={addToCart}
        filteredProducts={filteredProducts}
      />
    </>
  );
}
