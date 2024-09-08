import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "../pages/layout/RootLayout";
import Home from "../pages/home";
import Shop from "../pages/shop";
import Company from "../pages/company";
import Checkout from "../pages/checkout";
import Collections from "../pages/collections";
import Cart from "../pages/cart/index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // loader: rootLoader,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/company",
        element: <Company />,
      },
      {
        path: "/collections",
        element: <Collections />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);
