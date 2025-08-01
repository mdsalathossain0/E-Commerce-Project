import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'

const SampleNextArrow = ({ className, style, onClick }) => {
  return (
   <div className='hidden lg:block'>
     <div
      className={`${className}  absolute top-[30%] right-8 -translate-y-1/2 w-[64px] h-[64px] bg-fivth rounded-full flex justify-center items-center`}
      onClick={onClick}
    >
        <FaLongArrowAltRight className='text-white'/>

    </div>
   </div>
  )
}

export default SampleNextArrow