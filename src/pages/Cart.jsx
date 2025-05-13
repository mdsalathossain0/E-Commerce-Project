import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import SubHeading from '../components/SubHeading'
import Image from '../components/Image'
import Button from '../components/Button'
import { IoIosArrowForward } from 'react-icons/io'

import Cartimg from '../assets/cart12.png'

const Cart = () => {
  return (
    <section className='py-26'>
      <Container>
      <SubHeading text='Cart'/>
     <Flex className='items-center gap-x-2 pb-[136px]'>
      <p className='text-sm text-first font-normal font-san'>Home</p>
      <span className='text-sm text-first font-normal font-san'><IoIosArrowForward /></span>
      <p className='text-sm text-first font-normal font-san'>Cart</p>
     </Flex>
     <Flex className='gap-x-[340px] bg-third py-8'>
      <h5 className='text-base text-second font-bold font-san leading-6 pl-5'>Product</h5>
      <h5 className='text-base text-second font-bold font-san leading-6'>Price</h5>
      <h5 className='text-base text-second font-bold font-san leading-6'>Quantity</h5>
      <h5 className='text-base text-second font-bold font-san leading-6'>Total</h5>
     </Flex>
     <Flex className='items-center border border-sixth pb-8'>
      <div className='flex gap-x-10 pt-8 items-center'>
        <div className='pl-5 text-base text-second font-bold font-san leading-6'>x</div>
        <div className='w-[100px] h-[100px]'><Image className='w-full h-full' src={Cartimg}/></div>
        <div><p className='text-base text-second font-bold font-san leading-6 pr-[100px]'>Product name</p></div>
      </div>
      <div><h5 className='pt-8 pr-[312px] text-xl text-second font-bold font-san'>$44.00</h5></div>
      <div className='flex mr-[270px] gap-x-9 mt-8 px-5 py-3 border border-sixth'>
        <p>-</p>
        <p>1</p>
        <p>+</p>
      </div>
      <div><h5 className='pt-8 text-xl text-second font-bold font-san'>$44.00</h5></div>
     </Flex>
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
          <td className='text-base text-first font-normal font-san leading-6 px-5 py-4 border border-sixth'>389.99 $</td>
        </tr>
        <tr>
          <td className='text-base text-second font-bold font-san leading-6 px-5 py-4 border border-sixth'>Total</td>
          <td className='text-base text-second font-normal font-san leading-6 px-5 py-4 border border-sixth'>389.99 $</td>
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