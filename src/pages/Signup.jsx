import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import SubHeading from '../components/SubHeading'
import Input from '../components/Input'
import { IoIosArrowForward } from 'react-icons/io'
import Button from '../components/Button'

const Signup = () => {
  return (
    <section className='py-26'>
      <Container>
        <SubHeading text='Sign up'/>
       <Flex className='items-center gap-x-2 pb-[136px]'>
       <p className='text-sm text-first font-normal font-san'>Home</p>
       <span className='text-sm text-first font-normal font-san'><IoIosArrowForward /></span>
       <p className='text-sm text-first font-normal font-san'>Sign up</p>
       </Flex>
       <p className='w-[644px] text-base text-first font-normal font-san leading-7 pb-10 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p> <hr className='text-sixth'/>
       <h4 className=' text-[39px] text-second font-bold font-san pt-15 pb-10'>Your Personal Details</h4>
       <Flex className='w-w49 gap-x-5'>
      <Input className='w-[400px]' text='First Name' type='text' check='text' placeholder=
      'First Name'/>
      <Input className='w-[400px]' text='Last Name' type='text' check='last-text' placeholder=
      'Last Name'/>
     </Flex>
       <Flex className='w-w49 gap-x-5 pb-10'>
      <Input className='w-[400px]' text='Email Address' type='email' check='email' placeholder=
      'company@domain.com'/>
      <Input className='w-[400px]' text='Telephone' type='number' check='number' placeholder=
      'Your phone number'/>
     </Flex><hr className='text-sixth'/>
      <h4 className=' text-[39px] text-second font-bold font-san pt-15 pb-10'>New Customer</h4>
      <Flex className='w-w49 gap-x-5'>
      <Input className='w-[400px]' text='Address 1' type='text' check='address1' placeholder=
      '4279 Zboncak Port Suite 6212'/>
      <Input className='w-[400px]' text='Address 2' type='text' check='address2' placeholder=
      '-'/>
     </Flex>
      <Flex className='w-w49 gap-x-5'>
      <Input className='w-[400px]' text='City' type='text' check='city' placeholder=
      'Your city'/>
      <Input className='w-[400px]' text='Post Code' type='number' check='post-code' placeholder=
      '05228'/>
     </Flex>
      <Flex className='w-w49 gap-x-5 pb-10'>
      <Input className='w-[400px]' text='Country' type='text' check='text' placeholder=
      'Please select'/>
      <Input className='w-[400px]' text='Region/State' type='text' check='last-text' placeholder=
      'Please select'/>
     </Flex><hr className='text-sixth'/>
      <h4 className=' text-[39px] text-second font-bold font-san pt-15 pb-10'>Your Password</h4>
      <Flex className='w-w49 gap-x-5 pb-10'>
      <Input className='w-[400px]' text='Password' type='password' check='password' placeholder=
      'Password'/>
      <Input className='w-[400px]' text='Repeat Password' type='password' check='repeat' placeholder=
      'Repeat password'/>
     </Flex><hr className='text-sixth'/>

    <div className='pt-16 flex items-center '> 
      <input  id='select' className='mr-5 accent-first' type="checkbox" />
      <label className='text-sm text-first font-normal font-san' htmlFor="select"> I have read and agree to the Privacy Policy
     </label>
    </div>
    <Flex className='gap-x-8 items-center pt-6 pb-10'>
      <p className='text-sm text-first font-normal font-san'>Subscribe Newsletter</p>
      <div className='flex gap-x-4 items-center'>
        <input className='accent-first' type="checkbox" id='yes'/>
      <label className='text-sm text-first font-normal font-san' htmlFor="yes">Yes</label>
      </div>
      <div className='flex gap-x-4 items-center'>
        <input className='accent-first' type="checkbox" id='no'/>
      <label className='text-sm text-first font-normal font-san' htmlFor="no">No</label>
      </div>
    </Flex>

    <Button text='Log in'/>
      </Container>
    </section>
  )
}

export default Signup