import React, { createContext, useEffect, useState } from "react";
import { fetchCart, handleAddToCart } from "../services/carts/cartsapi";
import { fetchProducts } from "../services/products/productsapi";

export const GlobalContext = React.createContext();
export default function GlobalProvider({ children }) {
  const [cart, setCart] = useState(null);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(null);
  const [category, setCategory] = useState(null);
  const test = "test";

  const addToCart = async (productId, quantity) => {
    console.log(productId, quantity);
    const results = await handleAddToCart(productId, quantity);
    console.log("ADD TO CART: ", results);
    setCart(results);
  };

  const switchCategory = (slug) => {
    console.log("LIST OF PRODUCTS ", products);
    console.log("KEYWORD:", slug);
    const results = products.filter((item) => {
      console.log(item.categories[0].slug);
      if (item.categories[0].slug === slug) {
        return item;
      }
    });
    console.log("FILTERED PRODUCTS", results);
    setFilteredProducts(results);
  };

  const getProducts = async () => {
    const products = await fetchProducts(category ? category : null);
    setProducts(products);
  };

  useEffect(() => {
    const fetchData = async () => {
      const products = await fetchProducts();
      setProducts(products);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const cart = await fetchCart();
      setCart(cart);
    };

    fetchData();
  }, [cart, addToCart]);

  return (
    <GlobalContext.Provider
      value={{
        cart,
        addToCart,
        products,
        setProducts,
        filteredProducts,
        setFilteredProducts,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
