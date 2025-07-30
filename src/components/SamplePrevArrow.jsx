import React from 'react'
import { FaLongArrowAltLeft } from 'react-icons/fa'

const SamplePrevArrow = ({ className, onClick }) => {
  return (
    <div className='hidden lg:block'>
      <div
          className={`${className} absolute top-[30%] left-0 z-10 -translate-y-1/2 w-[64px] h-[64px] bg-fivth rounded-full flex justify-center items-center`}
          onClick={onClick}
        >
            <FaLongArrowAltLeft className='text-white'/>
    
        </div>
    </div>
  )
}

export default SamplePrevArrow