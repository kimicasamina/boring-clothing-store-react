import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../../components/navbar";

export default function RootLayout() {
  return (
    <div
      id="rootLayout"
      className="w-full max-w-screen-desktop min-h-screen mx-auto flex flex-col"
    >
      <Navbar />
      <main className="py-20">
        <Outlet />
      </main>
    </div>
  );
}
