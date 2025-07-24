import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import SubHeading from '../components/SubHeading'
import { IoIosArrowForward } from 'react-icons/io'
import Input from '../components/Input'
import Button from '../components/Button'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const auth = getAuth();
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  let navigate=useNavigate()

  let handleEmail = (e) => {
    setEmail(e.target.value)
  }

  let handlePassword = (e) => {
    setPassword(e.target.value)
  }

  let handleBack = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast.success("Login Done")
        setTimeout(() => {
          navigate('/cart')
        }, 2000);
      })
      .catch((error) => {
        const errorCode = error.code;
        toast.error('Username or password incorrect')

      });
  }
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])
  return (
    <section className='py-26'>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="light"
        
      />
      <Container>
        <SubHeading text='Login' />
        <Flex className='items-center gap-x-2 pb-[136px]'>
          <p className='text-sm text-first font-normal font-san'>Home</p>
          <span className='text-sm text-first font-normal font-san'><IoIosArrowForward /></span>
          <p className='text-sm text-first font-normal font-san'>Login</p>
        </Flex>
        <p className='w-[644px] text-base text-first font-normal font-san leading-7 pb-10 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p> <hr className='text-sixth' />
        <h4 className=' text-[39px] text-second font-bold font-san pt-15'>Returning Customer</h4>
        <Flex className=' gap-x-5 pt-10'>
          <Flex className='flex-col'>
            <label className='w-[400px] text-base text-second font-bold font-san leading-6 ' htmlFor="email">Email</label>
            <input onChange={handleEmail} className=' w-[400px] text-base font-normal py-4 px-2 border-b-2 border-sixth placeholder:text-sm placeholder:text-first placeholder:font-normal' type='email' id='email' />
          </Flex>
          <Flex className='flex-col'>
            <label className='w-[400px] text-base text-second font-bold font-san leading-6 ' htmlFor="password"> Password</label>
            <input onChange={handlePassword} className=' w-[400px] text-base font-normal py-4 px-2 border-b-2 border-sixth placeholder:text-sm placeholder:text-first placeholder:font-normal' type='password' id='password' />
          </Flex>
        </Flex>
        <div onClick={handleBack} className='pt-6 pb-8 border-b-2 border-sixth'>
          <Button text='Back to cart' />
        </div>
        <h4 className=' text-[39px] text-second font-bold font-san pt-15'>New Customer</h4>
        <p className='w-[644px] text-base text-first font-normal font-san leading-7 pb-12 pt-9 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
        <Button text='Continue' />
      </Container>
    </section>
  )
}

export default Login