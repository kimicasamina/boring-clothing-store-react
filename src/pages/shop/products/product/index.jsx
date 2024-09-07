import React from "react";

export default function Product({ product }) {
  const { name, price, image, id } = product;
  console.log("PRODUCT:", name, price, image, id);
  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    // setCart(cart);
    console.log("CART LIST: ", cart);
    return cart;
  };

  return (
    <div className="card">
      <img src={image?.url} alt="" className="card__image" />
      <div className="card__details">
        <p className="card__title">{name}</p>
        <p className="card__price">{price?.formatted_with_symbol}</p>
      </div>
      <button className="btn card__btn">ADD TO CART</button>
    </div>
    // <>
    //   <p>
    //     {name}: {price.formatted_with_symbol}
    //   </p>
    //   <div className="flex flex-col gap-2 rounded-md p-4 shadow-md max-w-[400px] ">
    //     <img src={image.url} alt="" className="mb-4 w-full min-h-[450px]" />
    //     <div className="flex flex-col gap-y-2">
    //       <p className="text-3xl font-semibold">{name}</p>
    //       <div className="w-full flex items-center justify-between">
    //         <p className="text-2xl">{price.formatted_with_symbol}</p>
    //         <button
    //           className="flex justify-between gap-x-4 text-content-light bg-btn px-4 py-2 hover:shadow-md"
    //           onClick={(e) => handleAddToCart(id, 1)}
    //         >
    //           <span className="">ADD TO CART</span>
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             strokeWidth={1.5}
    //             stroke="currentColor"
    //             className="size-6"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
    //             />
    //           </svg>
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
}
