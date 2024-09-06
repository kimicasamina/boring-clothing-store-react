import React from "react";
import { hero } from "../../assets/image";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col justify-start items-center">
      <h1 className="text-center">ENEMY OF EXCITING</h1>

      <div className="flex w-full flex-wrap gap-4 text-xl justify-center items-center ">
        <p className="">monotonoes</p>
        <p className="">repetitive</p>
        <p className="">simple</p>
        <p className="">stereotyped</p>
        <p className="adjective font-poppins font-normal">effective</p>
        <p className="">minimal</p>
        <p className="">flat</p>
      </div>
      <img src={hero} alt="" className="w-full tablet:max-w-[50%]" />
    </div>
  );
}
