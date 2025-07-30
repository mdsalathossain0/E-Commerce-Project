import React from 'react'

import Image from './Image'

import Flex from './Flex'
import { FaHeart, FaShoppingCart } from 'react-icons/fa'
import { FaCodeCompare } from 'react-icons/fa6'
import { useDispatch } from 'react-redux'
import { cartItem } from '../slice/addtocard'
import { Link } from 'react-router-dom'

const Cart = ({title, price, color, image, offer}) => {

  let dispatch = useDispatch()

  let addToCart=()=>{
    dispatch(cartItem({
      title:title,
      price:price,
      image:image,
      quantity:1
    }))
  }

  return (
    
        <div  className='w-[350px] md:w-[310px] lg:w-[370px] h-[500px]  py-3  relative group border border-sixth px-2 rounded-[6px]'>
            <Image className='w-full h-[330px] lg:h-[370px] object-cover' src={image}/>
            <Link to={`/productdetails/${title}`}>
            <Flex className='justify-between items-center'>
                <h5 className='text-base md:text-lg lg:text-xl text-second font-bold font-san pt-4 pb-3'>{title}</h5>
                <h6 className='text-xs md:text-sm lg:text-base text-fivth font-normal font-san leading-6'>${price}</h6>
            </Flex>
            </Link>
            <h6 className='text-xs md:text-sm lg:text-base text-fivth font-normal font-san leading-7'>{color}</h6>
            <button className='text-sm text-white font-bold font-san bg-second py-2 px-3 md:px-4 lg:px-5 absolute top-5 left-5'>{offer}</button>
            <div className= 'hidden lg:block w-full bg-white absolute bottom-0 left-0 opacity-0 group-hover:opacity-100 group-hover:bottom-[97px] py-4 px-5 duration-500 '>
              <Flex className='flex-col items-end gap-y-5 '>
                <p className='text-base text-fivth font-normal font-san hover:font-bold hover:text-second duration-300'>Add to Wish List <FaHeart className='text-second ml-4 inline'/>
                </p>
                <p className='text-base text-fivth font-normal font-san hover:font-bold hover:text-second duration-300'>Compare <FaCodeCompare className='text-second ml-4 inline'/>
                </p>
                <p onClick={addToCart} className='text-base text-fivth font-normal font-san hover:font-bold hover:text-second duration-300'>Add to Cart <FaShoppingCart className='text-second ml-4 inline'/>
                </p>
              </Flex>

            </div>
            <div onClick={addToCart} className='bg-second  mt-3 text-center mx-8 py-2 lg:hidden'><p  className='lg:hidden  text-base text-white font-normal font-san '>Add to Cart <FaShoppingCart className='text-second ml-4 inline'/>
                </p></div>
        </div>

  )
}

export default Cart