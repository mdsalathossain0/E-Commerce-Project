import React from 'react'

const SideList = ({text , className}) => {
  return (
    <li className={`w-[234px] text-base text-first font-normal font-san leading-7 border-b-2 border-sixth pb-5 hover:text-second hover:font-bold duration-500 ${className}`}>{text}</li>
  )
}

export default SideList