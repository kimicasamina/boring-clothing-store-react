import React from "react";
import { hero } from "../../assets/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-between h-full items-center gap-y-4">
      <div className="flex flex-col gap-y-4">
        <h1 className="branding__title">ENEMY OF EXCITING</h1>

        <div className="flex w-full flex-wrap gap-4 text-xl justify-center items-center ">
          <p className="branding__keyword ">monotonoes</p>
          <p className="branding__keyword ">repetitive</p>
          <p className="branding__keyword ">simple</p>
          <p className="branding__keyword ">stereotyped</p>
          <p className="branding__keyword ">effective</p>
          <p className="branding__keyword ">minimal</p>
          <p className="branding__keyword ">flat</p>
        </div>
      </div>
      <img
        src={hero}
        alt=""
        className="w-full max-w-[400px] h-full object-cover"
      />
      {/* <div className="flex-1 ">
      </div> */}
    </div>
  );
}
