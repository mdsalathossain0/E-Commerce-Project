import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import SubHeading from '../components/SubHeading'
import Image from '../components/Image'
import Button from '../components/Button'
import { IoIosArrowForward } from 'react-icons/io'

import Cartimg from '../assets/cart12.png'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, removeItem } from '../slice/addtocard'

const Cart = () => {
  let [total , setTotal]=useState(0)
  let dispatch= useDispatch()
  let data = useSelector((state)=>state.cart.value)
  
  let handleIncrement=(item)=>{
    dispatch(increment(item))
  }
  let handleDecrement=(item)=>{
    dispatch(decrement(item))
  }
  let handleRemove=(item)=>{
    dispatch(removeItem(item))
  }

  useEffect(()=>{
    let total = 0
    data.map(item=>{
      total += item.price*item.quantity
    })
   setTotal(total)
  })

  

  
  return (
    <section className='py-26'>
      <Container>
      <SubHeading text='Cart'/>
     <Flex className='items-center gap-x-2 pb-[136px]'>
      <p className='text-sm text-first font-normal font-san'>Home</p>
      <span className='text-sm text-first font-normal font-san'><IoIosArrowForward /></span>
      <p className='text-sm text-first font-normal font-san'></p>
     </Flex>
     <Flex className='gap-x-[340px] bg-third py-8'>
      <h5 className='text-base text-second font-bold font-san leading-6 pl-5'>Product</h5>
      <h5 className='text-base text-second font-bold font-san leading-6'>Price</h5>
      <h5 className='text-base text-second font-bold font-san leading-6'>Quantity</h5>
      <h5 className='text-base text-second font-bold font-san leading-6'>Total</h5>
     </Flex>
     {
      data.map(item=>(
       
        
        <Flex className='items-center border border-sixth pb-8'>
         
      <div className='flex gap-x-10 pt-8 items-center'>
        <div onClick={()=>handleRemove(item)} className='pl-5 text-base text-second font-bold font-san leading-6'>x</div>
        <div className='w-[100px] h-[100px]'><Image className='w-full h-full' src={item.image}/></div>
        <div><p className='text-base text-second font-bold font-san leading-6 pr-[100px]'>{item.title}</p></div>
      </div>
      <div><h5 className='pt-8 pr-[312px] text-xl text-second font-bold font-san'>${item.price}</h5></div>
      <div className='flex mr-[270px] gap-x-9 mt-8 px-5 py-3 border border-sixth'>
        <p onClick={()=>handleDecrement(item)}>-</p>
        <p>{item.quantity}</p>
        <p onClick={()=>handleIncrement(item)}>+</p>
      </div>
      <div><h5 className='pt-8 text-xl text-second font-bold font-san'>${(item.price*item.quantity).toFixed(2)}</h5></div>
     </Flex>
       
      
      ))
     }
     <Flex className='justify-between items-center pb-7 border-b border-l border-r border-sixth'>
      <div className='flex gap-x-5 items-center pt-8'>
         <select className='px-10 py-3 border border-sixth ml-5' name="Size" id="Size">
           <option value="S">S</option>
          <option value="L">L</option>
          <option value="M">M</option>
          <option value="XL">XL</option>
         </select>
        <h5 className='text-sm text-second font-bold font-san'>Apply coupon</h5>
      </div>
      <div><h5 className='text-sm text-second font-bold font-san mr-5 pt-8'>Update cart</h5></div>
     </Flex>
     <h5 className='text-xl text-second font-bold font-san text-right pt-13 pb-6'>Cart totals</h5>
     <div className='flex flex-col justify-end items-end '>
      <table className='w-[640px] border-collapse border border-sixth'>
        <tr className=''>
          <td className='text-base text-second font-bold font-san leading-6 px-5 py-4 border border-sixth'>Subtotal</td>
          <td className='text-base text-first font-normal font-san leading-6 px-5 py-4 border border-sixth'>{(total).toFixed(2)} $</td>
        </tr>
        <tr>
          <td className='text-base text-second font-bold font-san leading-6 px-5 py-4 border border-sixth'>Total</td>
          <td className='text-base text-second font-normal font-san leading-6 px-5 py-4 border border-sixth'>{(total).toFixed(2)} $</td>
        </tr>
      </table>
     </div>
     <div className='text-right pt-8'>
      <Button text='Proceed to Checkout'/>
     </div>
      </Container>
    </section>
  )
}

export default Cart