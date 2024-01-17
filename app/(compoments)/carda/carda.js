
  import Image from 'next/image'

//   import a from  '../../../public/card 1 1.png'
// import b from '../../../public/card 1 111.png'
// import c from '../../../public/card 1 111.png'
import e from '../../../public/c 1 dd1.png'

   
  

  
  import d from '../../../public/all all.png'

 



import React from 'react'

export default function Carda(props) {
  return (
    <>

    <div className="mt-5 px-">
        <Image width={500} src={props.imgsrc} alt="x" />

        <div className="flex justify-between pt-4" >
            <Image width={120} src={props.imgsamll1} alt="b" />
            <Image width={120} src={props.imgsmall2} alt="a" />
            <Image width={120} src={d} alt="c" />
        </div>

        <p className="pt-4">DSGN Animals</p>

        <div className="flex gap-2 pt-2">
          <Image src={e} alt="l" />
          <p>MrFox</p>
        </div>
    </div>

      
    </>
  )
}
