import React, { createContext, useEffect, useState } from "react";
import { fetchCart, handleAddToCart } from "../services/carts/cartsapi";
import { fetchProducts } from "../services/products/productsapi";

export const GlobalContext = React.createContext();
export default function GlobalProvider({ children }) {
  const [cart, setCart] = useState(null);
  const [products, setProducts] = useState([]);

  const addToCart = async (productId, quantity) => {
    const results = await handleAddToCart(productId, quantity);
    console.log("CART: ", results);
    setCart(results);
  };

  useEffect(() => {
    const fetchData = async () => {
      console.log("HELLO WORLD!");
      const products = await fetchProducts();
      setProducts(products);

      const cart = await fetchCart();
      setCart(cart);
      // setProducts(await fetchProducts());
      // setCart(await fetchCart());
    };

    fetchData();
    console.log(products, cart);
  }, []);

  return (
    <GlobalContext.Provider value={(cart, addToCart, products, setProducts)}>
      {children}
    </GlobalContext.Provider>
  );
}
