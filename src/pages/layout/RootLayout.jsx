import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../../components/navbar";

export default function RootLayout() {
  return (
    <div
      id="rootLayout"
      className="w-full max-w-screen-desktop min-h-screen mx-auto flex flex-col justify-between"
    >
      <Navbar />
      <main className="h-auto py-8 px-8  tablet:px-14">
        <Outlet />
      </main>
    </div>
  );
}
