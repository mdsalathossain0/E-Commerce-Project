import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import SubHeading from '../components/SubHeading'
import { IoIosArrowForward } from 'react-icons/io'
import Input from '../components/Input'
import Button from '../components/Button'

const Login = () => {
  return (
   <section className='py-26'>
    <Container>
      <SubHeading text='Login'/>
     <Flex className='items-center gap-x-2 pb-[136px]'>
      <p className='text-sm text-first font-normal font-san'>Home</p>
      <span className='text-sm text-first font-normal font-san'><IoIosArrowForward /></span>
      <p className='text-sm text-first font-normal font-san'>Login</p>
     </Flex>
     <p className='w-[644px] text-base text-first font-normal font-san leading-7 pb-10 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p> <hr className='text-sixth'/>
     <h4 className=' text-[39px] text-second font-bold font-san pt-15'>Returning Customer</h4>
     <Flex className='w-w49 gap-x-5'>
      <Input className='w-[400px]' text='Email Address' type='email' check='email' placeholder=
      'company@domain.com'/>
      <Input className='w-[400px]' text='Password' type='password' check='password' placeholder=
      '******'/>
     </Flex>
     <div className='pt-6 pb-8 border-b-2 border-sixth'>
      <Button text='Log in'/>
     </div>
     <h4 className=' text-[39px] text-second font-bold font-san pt-15'>New Customer</h4>
     <p className='w-[644px] text-base text-first font-normal font-san leading-7 pb-12 pt-9 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
     <Button text='Continue'/>
    </Container>
   </section>
  )
}

export default Login