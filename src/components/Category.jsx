import React, { useState } from 'react'
import Flex from './Flex'
import { BiMinus } from 'react-icons/bi'
import { BsPlus } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { categoryFunction } from '../slice/categorySlice'


const Category = ({text,type}) => {
    let dispatch = useDispatch()
    let category = useSelector((state)=> state.category.value)

    
     let handleMinus =()=>{
       
       dispatch(categoryFunction(false))
     }
     let handlePlus =()=>{
       
       dispatch(categoryFunction(true))
     }
  return (
            <Flex className='justify-between items-center py-5 border-b border-sixth last:border-0'>
          <p className='text-first text-sm lg:text-base font-san font-normal leading-7'>{text}</p>
          {
            type == 'true'? 
            category ? 
            <BiMinus onClick={handleMinus}  className='text-first text-xl font-san font-normal leading-7'/>
            :
            <BsPlus onClick={handlePlus}  className='text-first text-xl font-san font-normal leading-7'/>
          : ''
          }

        </Flex>
  )
}

export default Category