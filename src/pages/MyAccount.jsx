import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import SubHeading from '../components/SubHeading'
import { IoIosArrowForward } from 'react-icons/io'
import SideList from '../components/SideList'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const MyAccount = () => {

  let prev = useSelector(state=>state.action.prevvalue)
  let next = useSelector(state=>state.action.currentvalue)

  console.log(prev)
  console.log(next)
  return (
    <section className='py-15 lg:py-26 px-5'>
      <Container>
      <SubHeading text='My Account'/>
      <Flex className='items-center gap-x-2 pb-15 lg:pb-[136px]'>
      <p className='text-xs lg:text-sm text-first font-normal font-san'>{ prev && next!=prev && next==='myaccount' ? (<Link to={prev == 'Home'? '/' : `${prev}`}>{`${prev}`}</Link>) : null} my account</p>
      </Flex>
      <Flex className='flex-col lg:flex-row lg:gap-x-10 gap-y-8 lg:gap-y-0'>
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
        <p className='w-full lg:w-[918px] text-first text-sm lg:text-base font-normal font-san leading-7 pb-5'>Hello <a className='text-second' href="">admin</a> (not <a className='text-second' href="">admin</a>? <a className='text-second' href="">Log out</a> )</p>
        <p className='w-full lg:w-[918px] text-first text-sm lg:text-base font-normal font-san leading-7'>From your account dashboard you can view your <a className='text-second' href="">recent orders</a>, manage your <a className='text-second' href="">shipping and billing addresses</a>, and <a className='text-second' href="">edit your password and account details</a>.</p>
        </div> 
      </Flex>
      </Container>
    </section>
  )
}

export default MyAccount