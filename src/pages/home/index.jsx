import React from "react";
import { hero } from "../../assets/image";

export default function Home() {
  return (
    <div className="container py-12 flex-1 h-screen flex flex-col">
      <h1 className="font-serif font-normal text-7xl text-center mb-2">
        ENEMY OF EXCITING
      </h1>
      <div className="flex w-full flex-wrap gap-4 text-2x justify-center items-center ">
        <p className="adjective font-poppins font-normal">monotonoes</p>
        <p className="adjective font-poppins font-normal">repetitive</p>
        <p className="adjective font-poppins font-normal">simple</p>
        <p className="adjective font-poppins font-normal">stereotyped</p>
        <p className="adjective font-poppins font-normal">effective</p>
        <p className="adjective font-poppins font-normal">minimal</p>
        <p className="adjective font-poppins font-normal">flat</p>
      </div>

      <img src={hero} alt="" className="" />

      {/* <div className="flex-1 min-h-[250px] w-[50vh] items-center mx-auto bg-bkg-white mt-12 relative ">

        <Image
          src={hero}
          fill={true}
          className="object-cover"
          alt="solid black longsleeve image"
          // style={{ objectFit: "cover" }}
        />
      </div> */}
    </div>
  );
}
