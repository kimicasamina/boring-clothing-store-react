import React from "react";
import { commerce } from "../../lib/commerce";

export const fetchProducts = async (category) => {
  const { data } = await commerce.products.list(
    category
      ? {
          category_slug: [category],
        }
      : null
  );
  console.log("DATA:", data);
  return data;
};
