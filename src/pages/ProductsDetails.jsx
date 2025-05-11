import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Button from '../components/Button'

import Productimg1 from '../assets/productdetails1.png'
import Productimg2 from '../assets/cart12.png'
import Productimg3 from '../assets/cart11.png'
import Productimg4 from '../assets/cart10.png'
import { FaStar } from 'react-icons/fa'

const ProductsDetails = () => {
  return (
    <section>
        <Container>
            <Flex className='flex-wrap justify-between gap-y-8 pt-[136px] pb-12'>
                <div className='w-w49'><Image className='w-full' src={Productimg1}/></div>
                <div className='w-w49'><Image className='w-full' src={Productimg2}/></div>
                <div className='w-w49'><Image className='w-full' src={Productimg3}/></div>
                <div className='w-w49'><Image className='w-full' src={Productimg4}/></div>
    
            </Flex>
            <h4 className='text-[39px] text-second font-bold font-san'>Product</h4>
            <Flex className='gap-x-6 items-center pt-4 pb-6'>
                <ul className='flex gap-x-[2px] '>
                    <li className='text-sm text-[#FFD881]'><FaStar /></li>
                    <li className='text-sm text-[#FFD881]'><FaStar /></li>
                    <li className='text-sm text-[#FFD881]'><FaStar /></li>
                    <li className='text-sm text-[#FFD881]'><FaStar /></li>
                    <li className='text-sm text-[#FFD881]'><FaStar /></li>
                </ul>
                <p className='text-sm text-fivth font-normal font-san'>1 Review</p>
            </Flex>
            <Flex className=' gap-x-[22px] items-center'>
                <h5 className='text-base text-fivth font-normal font-san'><del>$88.00</del></h5>
                <h5 className='text-xl text-second font-bold font-san'>$44.00</h5>
            </Flex>
            <Flex className='gap-x-13 items-center pt-14'>
                <h4 className='text-base text-second font-bold font-san leading-6'>COLOR:</h4>
                <ul className='flex gap-x-4'>
                    <li className='w-[20px] h-[20px] rounded-full bg-[#979797] hover:scale-[1.5] duration-300'></li>
                    <li className='w-[20px] h-[20px] rounded-full bg-[#FF8686] hover:scale-[1.5] duration-300'></li>
                    <li className='w-[20px] h-[20px] rounded-full bg-[#7ED321] hover:scale-[1.5] duration-300'></li>
                    <li className='w-[20px] h-[20px] rounded-full bg-[#B6B6B6] hover:scale-[1.5] duration-300'></li>
                    <li className='w-[20px] h-[20px] rounded-full bg-[#15CBA5] hover:scale-[1.5] duration-300'></li>
                </ul>
            </Flex>
            <Flex className='gap-x-[75px] items-center pt-14'>
                <h4 className='text-base text-second font-bold font-san leading-6'>SIZE:</h4>
                <select className='py-2 px-8 border border-sixth'>
                    <option value="S">S</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
            </Flex>
            <Flex className='gap-x-7 items-center pt-14'>
                <h4 className='text-base text-second font-bold font-san leading-6'>QUANTITY:</h4>
                <Flex className='gap-x-9 py-2 px-8 border border-sixth '>
                    <div>-</div>
                    <div>1</div>
                    <div>+</div>
                </Flex>
            </Flex>
            <Flex className='gap-x-7 items-center pt-14'>
                <h4 className='text-base text-second font-bold font-san leading-6'>STATUS:</h4>
                <p className='text-base text-fivth font-normal font-san leading-7'>In stock</p>
                
            </Flex>
            <Button/>

        </Container>
    </section>
  )
}

export default ProductsDetails