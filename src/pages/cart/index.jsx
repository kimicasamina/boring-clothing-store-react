import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/globalProvider";

export default function Cart() {
  const { cart, setCart, emptyCart, updateCartQty } = useContext(GlobalContext);
  console.log("CART: ", cart);
  if (!cart) {
    return <h1 className="">Loading...</h1>;
  }
  return (
    <div className="flex flex-col gap-y-10">
      <h1 className="text-4xl font-semibold">Cart</h1>
      <div className="flex flex-col ">
        {cart
          ? cart?.line_items.map((item) => (
              <div
                className=" flex flex-col items-center tablet:flex-row tablet:h-auto py-10 tablet:py-8 tablet:gap-x-6 border-purple-dark border-t "
                key={item.id}
              >
                <img
                  src={item.image.url}
                  alt=""
                  className="card__image w-full h-full tablet:h-[200px] tablet:max-w-[180px] object-cover mb-10 tablet:m-0"
                />
                <div className="flex flex-col gap-y-4 flex-1 tablet:relative justify-between items-center tablet:items-start">
                  <p className="card__title">{item.name}</p>
                  <p className="card__price">
                    {item.price.formatted_with_symbol}
                  </p>
                  <span className="text-2xl">
                    Total: {item.line_total.formatted_with_symbol}
                  </span>
                  <div className="flex justify-start items-center gap-x-4 ">
                    <button
                      className="btn cart__item__btn"
                      onClick={() => {
                        updateCartQty(item.id, item.quantity + 1);
                      }}
                    >
                      +
                    </button>
                    <span className="text-2xl flex justify-center items-center">
                      {item.quantity}
                    </span>
                    <button
                      className="btn cart__item__btn"
                      onClick={() => updateCartQty(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>

      <div className="flex flex-col gap-y-4 items-start ">
        <div className="flex gap-x-4 items-center">
          <span className="font-bold text-4xl">Subtotal: </span>
          <span className="text-4xl">
            {cart.subtotal.formatted_with_symbol}
          </span>
        </div>
        <div className="flex gap-x-4">
          <button className="btn btn__clear " onClick={() => emptyCart()}>
            CLEAR CART
          </button>
          <Link to="/checkout" className="btn btn__checkout ">
            CHECKOUT
          </Link>
        </div>
      </div>
    </div>
  );
}
