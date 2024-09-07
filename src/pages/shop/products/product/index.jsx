import React, { useState } from "react";
import { handleAddToCart } from "../../../../services/carts/cartsapi";

export default function Product({ product }) {
  const { name, price, image, id } = product;

  return (
    <div className="card">
      <img src={image?.url} alt="" className="card__image" />
      <div className="card__details">
        <p className="card__title">{name}</p>
        <p className="card__price">{price?.formatted_with_symbol}</p>
      </div>
      <button className="btn card__btn" onClick={() => handleAddToCart(id, 1)}>
        ADD TO CART
      </button>
    </div>
  );
}
