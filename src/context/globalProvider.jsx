import React, { createContext, useEffect, useState } from "react";
import {
  fetchCart,
  handleAddToCart,
  handleEmptyCart,
  handleUpdateCartQty,
} from "../services/carts/cartsapi";
import { fetchProducts } from "../services/products/productsapi";
import { fetchShippingCountries } from "../services/checkout/checkoutapi";

export const GlobalContext = React.createContext();
export default function GlobalProvider({ children }) {
  const [cart, setCart] = useState(null);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(null);

  // saving form inputs data
  const [checkoutDetails, setCheckoutDetails] = useState({});
  const [checkoutToken, setCheckoutToken] = useState(null);

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
    setCart(results);
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

  useEffect(() => {
    const fetchData = async () => {
      const countries = await fetchShippingCountries();
      console.log(countries);
    };

    fetchData();
  }, []);

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
        checkoutDetails,
        setCheckoutDetails,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
