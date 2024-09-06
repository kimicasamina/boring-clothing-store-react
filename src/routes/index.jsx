import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "../pages/layout/RootLayout";
import Home from "../pages/home";
import Catalog from "../pages/catalog";
import Company from "../pages/company";
import Checkout from "../pages/checkout";

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
        path: "/catalog",
        element: <Catalog />,
      },
      {
        path: "/company",
        element: <Company />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);
