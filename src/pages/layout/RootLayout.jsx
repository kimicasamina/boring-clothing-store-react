import React from "react";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <nav className="">Navigation</nav>
      <main className="">
        <Outlet />
      </main>
    </>
  );
}
