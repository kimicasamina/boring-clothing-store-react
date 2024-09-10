import React, { createContext, useEffect, useState } from "react";
import {
  fetchCart,
  handleAddToCart,
  handleEmptyCart,
  handleUpdateCartQty,
} from "../services/carts/cartsapi";
import { fetchProducts } from "../services/products/productsapi";

export const GlobalContext = React.createContext();
export default function GlobalProvider({ children }) {
  const [cart, setCart] = useState(null);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(null);

  const addToCart = async (productId, quantity) => {
    console.log(productId, quantity);
    const results = await handleAddToCart(productId, quantity);
    console.log("ADD TO CART: ", results);
    setCart(results);
  };

  const emptyCart = async () => {
    console.log("EMPTYING CART ...");
    const results = await handleEmptyCart();
    setCart(results);
  };

  const updateCartQty = async (productId, numOfItem) => {
    console.log("UPDATE CART QUANTITY ...", productId);
    console.log("QUANTITY: ", numOfItem);
    const results = await handleUpdateCartQty(productId, numOfItem);
    console.log("RESULTS: ", results);
    const newCart = cart.line_items.map((item) => {
      if (item.id === productId) {
        item.quantity + numOfItem;
      }
    });
    setCart(newCart);
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
        emptyCart,
        updateCartQty,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
