import { commerce } from "../../lib/commerce";

export const fetchCart = async () => {
  const { data } = await commerce.cart.retrieve();
  console.log("DATA: ", data);
  return data;
};

export const handleAddToCart = async (productId, quantity) => {
  const { cart } = await commerce.cart.add(productId, quantity);
  return cart;
};
