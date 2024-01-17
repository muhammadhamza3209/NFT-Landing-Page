import React from "react";

import Image from "next/image";

import a from "../../../public/01.png";

export default function Cardb(props) {
  return (
    <>
      <div className="max-w-[350px] bg-[#3B3B3B] text-center rounded-xl ">
        <div className="bg-slate-600 h-6 w-7 rounded-full text-center mt-4 ml-3">
          <p>1</p>
        </div>
        <Image className="mx-auto" src={props.per} alt="" />
        <p className="mt-3 text-3xl mb-4">{props.kala}</p>
        <p className="mb-4 text-black text-2xl ">
          Total Sales <span className="text-white">34.53 ETH</span>
        </p>
      </div>
    </>
  );
}
