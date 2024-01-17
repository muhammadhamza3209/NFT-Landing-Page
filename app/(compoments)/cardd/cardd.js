
   import Image from 'next/image'

   import h from '../../../public/music 2.png'


import React from 'react'

export default function Cardd(props) {
  return (
    <>

    <div className="bg-[#3B3B3B] text-white max-w-[330px] mt-5 rounded-2xl">

        <Image width={500} src={props.hr} alt="p" />
        <p className="pt-5 pb-5 px-3 text-2xl">Art</p>

    </div>
      
    </>
  )
}
