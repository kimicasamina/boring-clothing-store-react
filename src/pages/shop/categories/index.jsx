import React, { useState } from "react";

export default function Categories({ setCategory }) {
  // const [categories, setCategories] = useState([
  //   "accessories",
  //   "tshirt",
  //   "jacket",
  //   "jeans",
  //   "bags",
  // ]);
  return (
    <ul className="flex gap-x-2 mb-12">
      <button className="" onClick={() => setCategory("tshirt")}>
        <span className="w-[100px] font-work-sans h-8 rounded-2xl flex justify-center items-center border border-bkg-dark text-[14px] hover:bg-purple-dark hover:text-light-base cursor-pointer transition-all duration-200">
          #shirts
        </span>
      </button>
      <button className="" onClick={() => setCategory("jeans")}>
        <span className="w-[100px] font-work-sans h-8 rounded-2xl flex justify-center items-center border border-bkg-dark text-[14px] hover:bg-purple-dark hover:text-light-base cursor-pointer transition-all duration-200">
          #jeans
        </span>
      </button>
      <button className="" onClick={() => setCategory("jacket")}>
        <span className="w-[100px] font-work-sans h-8 rounded-2xl flex justify-center items-center border border-bkg-dark text-[14px] hover:bg-purple-dark hover:text-light-base cursor-pointer transition-all duration-200">
          #jacket
        </span>
      </button>
      <button className="" onClick={() => setCategory("bags")}>
        <span className="w-[100px] font-work-sans h-8 rounded-2xl flex justify-center items-center border border-bkg-dark text-[14px] hover:bg-purple-dark hover:text-light-base cursor-pointer transition-all duration-200">
          #bags
        </span>
      </button>
      <button className="" onClick={() => setCategory("")}>
        <span className="w-[100px] font-work-sans h-8 rounded-2xl flex justify-center items-center border border-bkg-dark text-[14px] hover:bg-purple-dark hover:text-light-base cursor-pointer transition-all duration-200">
          #Az
        </span>
      </button>
    </ul>
  );
}
