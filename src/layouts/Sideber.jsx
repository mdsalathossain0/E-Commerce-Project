import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { IoReorderTwo, IoSearchSharp } from "react-icons/io5";
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';



const Sideber = () => {
  return (
    <section className='bg-third py-6'>
        <Container>
            <Flex className='items-center'>
                <div className='w-4/12'>
                    <Flex className='gap-x-3 items-center'>
                    <IoReorderTwo className='text-lg text-second'/>
                    <p className='text-sm text-second font-normal font-san'>Shop by Category</p>
                    </Flex>
                </div>
                <div className='w-5/12'>
                    <div className='relative'>
                        <input className='w-full bg-white py-4 pl-5 pr-16 placeholder:text-sm placeholder:text-[#C4C4C4] ' type="text" placeholder='Search Products...'/>
                        <IoSearchSharp className='absolute top-1/2 -translate-y-1/2 right-5 text-base text-second'/>

                    </div>
                </div>
                <div className='w-3/12'>
                    <Flex className='gap-x-10 justify-end'>
                        <div>
                            <Flex className='gap-x-2'>
                                <div><FaUser className='text-base text-first'/> </div>
                                <div><IoMdArrowDropdown className='text-base text-first'/> </div>
                            </Flex>
                        </div>
                        <div><FaShoppingCart className='text-base text-first'/>  </div>
                    </Flex>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Sideber