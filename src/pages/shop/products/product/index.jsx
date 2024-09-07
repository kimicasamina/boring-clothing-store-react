import React, { useState } from "react";
import { handleAddToCart } from "../../../../services/carts/cartsapi";

export default function Product({ product, addToCart }) {
  const { name, price, image, id } = product;
  console.log("ID: ", id);
  return (
    <div className="card">
      <img src={image?.url} alt="" className="card__image" />
      <div className="card__details">
        <p className="card__title">{name}</p>
        <p className="card__price">{price?.formatted_with_symbol}</p>
      </div>
      <button className="btn card__btn" onClick={() => addToCart(id, 1)}>
        ADD TO CART
      </button>
    </div>
  );
}
