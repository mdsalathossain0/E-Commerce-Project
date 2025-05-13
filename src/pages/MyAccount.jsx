import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import SubHeading from '../components/SubHeading'
import { IoIosArrowForward } from 'react-icons/io'
import SideList from '../components/SideList'

const MyAccount = () => {
  return (
    <section className='py-26'>
      <Container>
      <SubHeading text='My Account'/>
      <Flex className='items-center gap-x-2 pb-[136px]'>
      <p className='text-sm text-first font-normal font-san'>Home</p>
      <span className='text-sm text-first font-normal font-san'><IoIosArrowForward /></span>
      <p className='text-sm text-first font-normal font-san'>My Account</p>
      </Flex>
      <Flex>
        <div className='w-2/12'>
        <ul className='flex flex-col gap-y-5'>
          <SideList text='Dashboard'/>
          <SideList text='Others'/>
          <SideList text='Donwloads'/>
          <SideList text='Addresses'/>
          <SideList text='Account details'/>
          <SideList text='Logout'/>
        </ul>
        </div>
        <div className='w-10/12'>
        <p className='w-[918px] text-first text-base font-normal font-san leading-7 pb-5'>Hello <a className='text-second' href="">admin</a> (not <a className='text-second' href="">admin</a>? <a className='text-second' href="">Log out</a> )</p>
        <p className='w-[918px] text-first text-base font-normal font-san leading-7'>From your account dashboard you can view your <a className='text-second' href="">recent orders</a>, manage your <a className='text-second' href="">shipping and billing addresses</a>, and <a className='text-second' href="">edit your password and account details</a>.</p>
        </div> 
      </Flex>
      </Container>
    </section>
  )
}

export default MyAccount