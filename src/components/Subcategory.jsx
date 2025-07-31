import React from 'react'
import Flex from './Flex'
import { BsPlus } from 'react-icons/bs'

const Subcategory = ({text}) => {
  return (
             <Flex className='justify-between items-center py-5 border-b border-sixth'>
                 <p className='text-first text-xs md:text-sm lg:text-base font-san font-normal leading-7'>{text}</p>
                 <BsPlus  className='text-first text-xl font-san font-normal leading-7'/>
               </Flex>
  )
}

export default Subcategory