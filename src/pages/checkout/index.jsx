import React, { useContext, useEffect, useState } from "react";
import Stepper from "./Stepper";
import { generateToken } from "../../services/checkout/checkoutapi";
import { GlobalContext } from "../../context/globalProvider";

export default function Checkout() {
  const { cart } = useContext(GlobalContext);
  const [checkoutToken, setCheckoutToken] = useState(null);

  useEffect(() => {
    const fetchData = async (cartId) => {
      try {
        const token = await generateToken(cartId);

        console.log("CHECKOUT TOKEN: ", token);
        setCheckoutToken(token);
      } catch (error) {
        console.log("ERROR: ", error);
      }
    };

    fetchData(cart?.id);
  }, [cart]);

  if (!cart) {
    return <h1 className="">Loading...</h1>;
  }

  return (
    <>
      <h1 className="text-3xl font-semibold mb-8">Checkout</h1>
      <Stepper checkoutToken={checkoutToken} />
    </>
  );
}
