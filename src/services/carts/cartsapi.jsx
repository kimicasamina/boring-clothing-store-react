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

export const handleEmptyCart = async () => {
  console.log("EMPTYING CART...");
  const { cart } = await commerce.cart.empty();
  return cart;
};

export const handleUpdateCartQty = async (productId, numOfItem) => {
  const { items } = await commerce.cart.update(productId, {
    quantity: numOfItem,
  });
  console.log("updating cart quantity... ", items);
  return items;
};

export const handleRemoveFromCart = async (productId, quantity) => {
  const { cart } = await commerce.cart.remove(productId);
  setCart(cart);
};
