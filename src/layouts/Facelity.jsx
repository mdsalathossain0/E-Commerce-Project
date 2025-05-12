import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'

import FacelityOne from '../assets/facelity1.png'
import FacelityTwo from '../assets/facelity2.png'
import FacelityThree from '../assets/facelity3.png'


const Facelity = () => {
  return (
    <div className='py-[22px]  border-b-3 border-[#F0F0F0]'>
        <Container>
        <Flex className='justify-between'>
            <div>
                <Flex className='gap-x-4 items-center'>
                    <div className='w-[20px]'><Image className='w-full' src={FacelityOne}/></div>
                    <p className='text-base text-fourth font-san font-normal'>Two years warranty</p>
                </Flex>
            </div>
            <div>
            <Flex className='gap-x-4 items-center'>
                    <div className='w-[20px]'><Image className='w-full' src={FacelityTwo}/></div>
                    <p className='text-base text-fourth font-san font-normal'>Free shipping</p>
                </Flex>
            </div>
            <div>
            <Flex className='gap-x-4 items-center'>
                    <div className='w-[20px]'><Image className='w-full' src={FacelityThree}/></div>
                    <p className='text-base text-fourth font-san font-normal'>Return policy in 30 days</p>
                </Flex>
            </div>
        </Flex>
        </Container>
    </div>
  )
}

export default Facelity