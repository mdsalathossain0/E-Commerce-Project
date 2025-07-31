import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import SubHeading from '../components/SubHeading'
import { IoIosArrowForward } from 'react-icons/io'
import Input from '../components/Input'
import Button from '../components/Button'
import { useSelector } from 'react-redux'

const CheckOut = () => {
  let prev = useSelector((state)=> state.action.prevvalue)
  let current = useSelector((state)=> state.action.currentvalue)
  return (
    <section className='py-15 lg:py-26 px-5'>
      <Container>
      <SubHeading text='Checkout'/>
      <Flex className='items-center gap-x-2 pb-15 lg:pb-[136px]'>
      <p className='text-xs lg:text-sm text-first font-normal font-san'>{prev && current!==prev && current === 'Journal' ? (<Link to={prev== "Home" ?'/':`/${prev}`}>{`${prev} >`}</Link>):null} Checkout</p>
      </Flex>
      <p className='text-sm lg:text-base text-first font-normal font-san leading-8 pb-12 lg:pb-25'>Have a coupon? <a className='text-second' href="">Click here to enter your code</a></p>
      <h4 className='text-2xl md:text-[28px] lg:text-[39px] text-second font-bold font-san pb-5 lg:pb-10'>Billing Details</h4>
      <Flex className='flex-col lg:flex-row w-w70 lg:gap-x-5'>
        <Input className='w-w70 lg:w-[550px]' text='First Name *' check='first' placeholder='First Name' type='text'/>
        <Input className='w-w70 lg:w-[550px]' text='Last Name *' check='Last' placeholder='Last Name' type='text'/>
      </Flex>
      <Input className='w-w70' text='Companye Name (optional)' type='text' placeholder='Company Name' check='company'/>
      <Input className='w-w70' text='Country *' type='country' placeholder='Please select' check='country'/>
      <Input className='w-w70' text='Street Address *' type='address' placeholder='House number and street name' check='address'/>
      <input className='w-w70 placeholder:text-xs lg:placeholder:text-sm pb-5 pt-4 pl-2 border-b-2 border-sixth' type="text" placeholder='Apartment, suite, unit etc. (optional)'/>
      <Input className='w-w70' text='Town/City *' type='address' placeholder='Town/City' check='city'/>
      <Input className='w-w70' text='County (optional)' type='address' placeholder='County' check='count'/>
      <Input className='w-w70' text='Post Code *' type='number' placeholder='Post Code' check='post'/>
      <Input className='w-w70' text='Phone *' type='number' placeholder='Phone' check='phone'/>
      <Input className='w-w70' text='Email Address *' type='email' placeholder='Email' check='email'/>
      <h4 className='text-2xl md:text-[28px] lg:text-[39px] text-second font-bold font-san pb-7  lg:pb-10 pt-15 lg:pt-32'>Additional Information</h4>
      <p className='text-sm lg:text-base text-second font-bold font-san leading-6'>Other Notes (optional)</p>
      <p className='w-full lg:w-w70 text-xs lg:text-sm text-first font-normal font-san pt-3 pb-10 lg:pb-22 border-b-2 border-sixth '>Notes about your order, e.g. special notes for delivery.</p>
      <h4 className='text-2xl md:text-[28px] lg:text-[39px] text-second font-bold font-san pb-7 lg:pb-12 pt-15 lg:pt-32'>Your Order</h4>
      <table className=' w-[90%] border border-sixth text-left '>
        <th className='text-sm lg:text-base border border-sixth py-5 px-3'>Product</th>
        <th className='text-sm lg:text-base border border-sixth  py-5 px-3'>Total</th>
        <tr className='border border-sixth py-3py-3 px-3'>
          <td className='text-sm lg:text-base  text-second font-bold font-san border border-sixth py-3 px-3'>Product name x 1</td>
          <td className='text-sm lg:text-base border border-sixth py-3 px-3'>389.99 $</td>
        </tr>
        <tr className='border border-sixth py-3 px-3'>
          <td className='text-sm lg:text-base  text-second font-bold font-san border border-sixth py-3 px-3'>Subtotal</td>
          <td className='text-sm lg:text-base border border-sixth py-3 px-3'>389.99 $</td>
        </tr>
        <tr className='border border-sixth py-3 px-3'>
          <td className='text-sm lg:text-base  text-second font-bold font-san border border-sixth py-3 px-3'>Total</td>
          <td className='text-sm lg:text-base border border-sixth py-3 px-3'>389.99 $</td>
        </tr>
      </table>
      <div className='w-full lg:w-[1053px] mt-15 items-center border border-sixth'>
        <Flex className='gap-x-3 pt-6 pl-9'>
          <input className='accent-second text-sm lg:text-base text-second font-bold font-san leading-6'  type="radio" name="" id="bank" />
          <label className='text-sm lg:text-base text-second font-bold font-san leading-6' htmlFor="bank">Bank </label>
        </Flex>
        <div className='mx-9 mt-4 bg-third py-4 px-5'><p className='text-sm lg:text-base text-first'>Pay via Bank; you can pay with your credit card if you don’t have a Bank account.</p></div>
      <Flex className='gap-x-3 pt-6 pl-9'>
          <input className='accent-second text-base text-second font-bold font-san leading-6'  type="radio" name="" id="bank1" />
          <label className='text-sm lg:text-base text-first font-bold font-san leading-6' htmlFor="bank1">Bank 2</label>
        </Flex>
        <p className='w-full lg:w-[985px] text-sm lg:text-base text-first font-normal font-san leading-8 pt-4 pb-6 pl-9'>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a className='text-second' href="">privacy policy</a>.</p>
        <div className='pl-9 pb-8'><Button text='Proceed to Bank'/></div>
      </div>
      </Container>
    </section>
  )
}

export default CheckOut