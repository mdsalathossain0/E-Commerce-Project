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
import { MdAdd } from 'react-icons/md'
import Input from '../components/Input'

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
            <Flex className=' gap-x-[22px] items-center pb-7 border-b-3 border-sixth w-[49%]'>
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
            <Flex className='gap-x-7 items-center pt-14 pb-7 border-b-3 border-sixth w-[49%]'>
                <h4 className='text-base text-second font-bold font-san leading-6'>QUANTITY:</h4>
                <Flex className='gap-x-9 py-2 px-8 border border-sixth '>
                    <div>-</div>
                    <div>1</div>
                    <div>+</div>
                </Flex>
            </Flex>
            <Flex className='gap-x-7 items-center pt-14 pb-7 border-b-3 border-sixth w-[49%]'>
                <h4 className='text-base text-second font-bold font-san leading-6'>STATUS:</h4>
                <p className='text-base text-fivth font-normal font-san leading-7'>In stock</p>
                
            </Flex>
            <Flex className='gap-x-5 pt-7 pb-7 border-b-3 border-sixth w-[49%]'>
                <Button text='Add to Wish List'/>
                <Button text='Add to Cart'/>
            </Flex>
            <Flex className='justify-between  gap-x-7 items-center pt-14 pb-7 border-b-3 border-sixth w-[49%]'>
                <h4 className='text-base text-second font-bold font-san leading-6'>FEATURES & DETAILS</h4>
                <span><MdAdd  className='text-xl text-second font-bold'/></span>
            </Flex>
            <Flex className='justify-between  gap-x-7 items-center pt-14 pb-7 border-b-3 border-sixth w-[49%]'>
                <h4 className='text-base text-second font-bold font-san leading-6'>SHIPPING & RETURNS</h4>
                <span><MdAdd  className='text-xl text-second font-bold'/></span>
            </Flex>
            <p className='w-[49%] text-base text-first font-normal font-san leading-8 pt-7 pb-[122px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Flex className='gap-x-15 pb-10'>
                <h5 className='text-xl text-first font-normal font-san leading-7'>Description</h5>
                <h5 className='text-xl text-second font-bold font-san leading-7'>Reviews (1)</h5>
            </Flex>
            <p className='text-sm text-first font-normal font-san leading-7 pb-4 border-b-2 border-sixth'>1 review for Product</p>
            <Flex className='justify-between items-center pt-4 '>
                <div className='flex items-center gap-x-9'>
                    <p className='text-sm text-second font-normal font-san'>John Ford</p>
                <ul className='flex gap-x-[2px] '>
                    <li className='text-sm text-[#FFD881]'><FaStar /></li>
                    <li className='text-sm text-[#FFD881]'><FaStar /></li>
                    <li className='text-sm text-[#FFD881]'><FaStar /></li>
                    <li className='text-sm text-[#FFD881]'><FaStar /></li>
                    <li className='text-sm text-[#FFD881]'><FaStar /></li>
                </ul>
                </div>
                <div>
                    <p className='text-base text-first font-normal font-san'>6 months ago</p>
                </div>
            </Flex>
            <p className='w-[95%] text-base text-first font-normal font-san leading-8 pt-7 pb-4 border-b-2 border-sixth'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <h5 className='text-xl text-second font-bold font-san leading-7 pt-13 pb-12'>Add a Review</h5>
            <Input type='text' text='Name' check='name' placeholder='Your name here'/>
            <Input type='email' text='Email' check='email' placeholder='Your email here'/>
            <Input type='textarea' text='Review' check='review' placeholder='Your review here'/>
            <div className='pt-6 pb-[250px]'>
                <Button text='Post'/>
            </div>
        </Container>
    </section>
  )
}

export default ProductsDetails