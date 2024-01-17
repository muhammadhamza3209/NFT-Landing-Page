import React from "react";

import Image from "next/image";

import b from "../../../public/card 2.png";

import c from "../../../public/user.png";

export default function Cardc(props) {
  return (
    <>
      <div className="bg-[#3B3B3B] text-white mx-1 max-w-[430px] mt-5  rounded-2xl">
        <Image width={500} src={props.src} alt="p" />
        <p className="pt-3 text-2xl px-2 ">Distant Galaxy</p>

        <div className="flex gap-3 pt-4 px-3">
          <Image src={c} alt="" />
          <p>MoonDancer</p>
        </div>

        <div className="flex justify-between pt-5 px-2">
          <p className="text-black">ds 999</p>
          <p className="text-black">ha 269</p>
        </div>

        <div className="flex justify-between pt-5 px-3">
          <p>1.63 ETH</p>
          <p>0.33 wETH</p>
        </div>
      </div>
    </>
  );
}
