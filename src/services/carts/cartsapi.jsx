export const fetchCart = async () => {
  const { data } = await commerce.cart.retrieve();
  console.log("DATA: ", data);
  return data;
};
