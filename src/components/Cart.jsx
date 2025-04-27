import React from 'react'
import Container from './Container'
import Image from './Image'

import Cart1 from '../assets/cart1.png'
import Flex from './Flex'

const Cart = () => {
  return (
    <Container>
        <div className='w-[370px] h-[465px]  relative'>
            <Image className='w-full h-[370px]' src={Cart1}/>
            <Flex className='justify-between'>
                <h5 className='text-xl text-second font-bold font-san pt-6 pb-4'>Basic Crew Neck Tee</h5>
                <h6 className='text-base text-[#767676] font-normal font-san leading-7'>$44.00</h6>
            </Flex>
            <h6 className='text-base text-[#767676] font-normal font-san leading-7'>Black</h6>
            <button className='text-sm text-white font-bold font-san bg-second py-2 px-8 absolute top-5 left-5'>New</button>
        </div>
    </Container>
  )
}

export default Cart