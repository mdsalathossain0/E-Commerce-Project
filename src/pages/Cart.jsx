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
   let prev = useSelector((state)=> state.action.prevvalue)
    let current = useSelector((state)=> state.action.currentvalue)
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
   <section className='py-10 lg:py-20 px-5 '>
  <Container>
    <SubHeading text='Cart' />

    {/* Breadcrumb */}
    <p className='text-xs lg:text-sm text-first font-normal font-san pb-15 lg:pb-[136px]'>{prev && current!==prev && current === 'Journal' ? (<Link to={prev== "Home" ?'/':`/${prev}`}>{`${prev} >`}</Link>):null} Cart</p>

    {/* Header Row */}
    <Flex className='hidden md:flex justify-between bg-third py-4 px-4 rounded-md'>
      <h5 className='text-sm lg:text-base text-second font-bold font-san w-1/4'>Product</h5>
      <h5 className='text-sm lg:text-base text-second font-bold font-san w-1/4'>Price</h5>
      <h5 className='text-sm lg:text-base text-second font-bold font-san w-1/4'>Quantity</h5>
      <h5 className='text-sm lg:text-base text-second font-bold font-san w-1/4'>Total</h5>
    </Flex>

    {/* Items */}
    {data.map(item => (
      <Flex key={item.id} className='flex flex-col md:flex-row items-start md:items-center border border-sixth py-5 px-4 gap-4 md:gap-0'>
        <div className='flex items-center gap-4 w-full md:w-1/4'>
          <div onClick={() => handleRemove(item)} className='text-base text-second font-bold cursor-pointer'>x</div>
          <div className='w-[80px] h-[80px]'><Image className='w-full h-full object-cover' src={item.image} /></div>
          <p className='text-base text-second font-bold'>{item.title}</p>
        </div>

        <div className='w-full md:w-1/4 pt-2 md:pt-0'>
          <h5 className='text-base text-second font-bold'>${item.price}</h5>
        </div>

        <div className='w-full md:w-1/4 pt-2 md:pt-0'>
          <div className='flex items-center justify-start gap-x-4 border border-sixth px-4 py-2 w-fit'>
            <p onClick={() => handleDecrement(item)} className='cursor-pointer'>-</p>
            <p>{item.quantity}</p>
            <p onClick={() => handleIncrement(item)} className='cursor-pointer'>+</p>
          </div>
        </div>

        <div className='w-full md:w-1/4 pt-2 md:pt-0'>
          <h5 className='text-base text-second font-bold'>${(item.price * item.quantity).toFixed(2)}</h5>
        </div>
      </Flex>
    ))}

    {/* Coupon and Update */}
    <Flex className='flex-col md:flex-row justify-between items-start md:items-center gap-5 pt-6 pb-7 border border-sixth px-4'>
      <div className='flex gap-3 items-center'>
        <select className='px-4 py-2 border border-sixth' name="Size" id="Size">
          <option value="S">S</option>
          <option value="L">L</option>
          <option value="M">M</option>
          <option value="XL">XL</option>
        </select>
        <h5 className='text-sm text-second font-bold'>Apply coupon</h5>
      </div>
      <h5 className='text-sm text-second font-bold'>Update cart</h5>
    </Flex>

    {/* Cart Totals */}
    <h5 className='text-lg sm:text-xl text-second font-bold text-right pt-10 pb-4'>Cart totals</h5>

    <div className='flex justify-end'>
      <table className='w-full sm:w-2/3 lg:w-1/2 border border-sixth text-left'>
        <tbody>
          <tr>
            <td className='px-5 py-4 border border-sixth font-bold text-second'>Subtotal</td>
            <td className='px-5 py-4 border border-sixth text-first'>${total.toFixed(2)}</td>
          </tr>
          <tr>
            <td className='px-5 py-4 border border-sixth font-bold text-second'>Total</td>
            <td className='px-5 py-4 border border-sixth text-second'>${total.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
    

    {/* Checkout Button */}
    <div className='text-right pt-6'>
      <Button text='Proceed to Checkout' />
    </div>
  </Container>
</section>
  )
}

export default Cart