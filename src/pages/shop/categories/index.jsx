import React, { useContext, useState } from "react";
import { GlobalContext } from "../../../context/globalProvider";

export default function Categories({ switchCategory }) {
  // const [categories, setCategories] = useState([
  //   "accessories",
  //   "tshirt",
  //   "jacket",
  //   "jeans",
  //   "bags",
  // ]);
  return (
    <ul className="flex gap-x-2 mb-12">
      <button className="" onClick={() => switchCategory("tshirt")}>
        <span className="w-[100px] font-work-sans h-8 rounded-2xl flex justify-center items-center border border-bkg-dark text-[14px] hover:bg-purple-dark hover:text-light-base cursor-pointer transition-all duration-200">
          #shirts
        </span>
      </button>
      <button className="" onClick={() => switchCategory("jeans")}>
        <span className="w-[100px] font-work-sans h-8 rounded-2xl flex justify-center items-center border border-bkg-dark text-[14px] hover:bg-purple-dark hover:text-light-base cursor-pointer transition-all duration-200">
          #jeans
        </span>
      </button>
      <button className="" onClick={() => switchCategory("jacket")}>
        <span className="w-[100px] font-work-sans h-8 rounded-2xl flex justify-center items-center border border-bkg-dark text-[14px] hover:bg-purple-dark hover:text-light-base cursor-pointer transition-all duration-200">
          #jacket
        </span>
      </button>
      <button className="" onClick={() => switchCategory("bags")}>
        <span className="w-[100px] font-work-sans h-8 rounded-2xl flex justify-center items-center border border-bkg-dark text-[14px] hover:bg-purple-dark hover:text-light-base cursor-pointer transition-all duration-200">
          #bags
        </span>
      </button>
      <button className="" onClick={() => switchCategory("")}>
        <span className="w-[100px] font-work-sans h-8 rounded-2xl flex justify-center items-center border border-bkg-dark text-[14px] hover:bg-purple-dark hover:text-light-base cursor-pointer transition-all duration-200">
          #Az
        </span>
      </button>
    </ul>
  );
}
