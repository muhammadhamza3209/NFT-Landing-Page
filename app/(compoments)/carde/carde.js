import React from 'react'

import Image from 'next/image'



export default function Carde(props) {
  return (
    <>

    <div className="mt-5 bg-[#3B3B3B] text-white text-center md:px-3 max-w-[480px] mx-3 rounded-2xl py-12">
        <div>
            <Image className="mx-auto" src={props.gr} alt="o" />
            <p className="text-2xl mx-[40px] pt-3 pb-4 font-bold ">Setup Your wallet</p>
            <p >Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.</p>
        </div>

    </div>
      
    </>
  )
}
