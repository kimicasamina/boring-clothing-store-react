import { commerce } from "../../lib/commerce";

export const fetchCart = async () => {
  const data = await commerce.cart.retrieve();
  console.log("FETCH CART: ", data);
  return data;
};

export const handleAddToCart = async (productId, quantity) => {
  const data = await commerce.cart.add(productId, quantity);
  console.log("HANDLE ADD TO CART: ", data);
  return data;
};
