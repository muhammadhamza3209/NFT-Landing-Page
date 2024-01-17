import Image from "next/image";

import eye from "../../../public/Eye.png";

import React from "react";

export default function Side() {
  return (
    <>
      <div className="md:flex md:justify-between  max-w-[1400px] lg:mx-16 px-1">
        <div>
          <p className="lg:text-4xl md:text-3xl text-2xl font-bold">
            Trending Collection
          </p>
          <p className="pt-1">
            Checkout our weekly updated trending collection
          </p>
        </div>

        <div className="pt-5">
          <button className="flex gap-1 bg-[#3B3B3B] text-white border-2 border-purple-600 items-center justify-center mx-auto w-[130px] px-6 py-3">
            <Image src={eye} alt="l" />
            See all
          </button>
        </div>
      </div>
    </>
  );
}
