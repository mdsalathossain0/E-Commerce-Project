import React from 'react'

import Image from './Image'

import Flex from './Flex'
import { FaHeart, FaShoppingCart } from 'react-icons/fa'
import { FaCodeCompare } from 'react-icons/fa6'
import { useDispatch } from 'react-redux'
import { cartItem } from '../slice/addtocard'

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
    
        <div className='w-[370px]   relative group border border-sixth px-2 rounded-[6px]'>
            <Image className='w-full h-[370px]' src={image}/>
            <Flex className='justify-between items-center'>
                <h5 className='text-xl text-second font-bold font-san pt-6 pb-4'>{title}</h5>
                <h6 className='text-base text-fivth font-normal font-san leading-7'>${price}</h6>
            </Flex>
            <h6 className='text-base text-fivth font-normal font-san leading-7'>{color}</h6>
            <button className='text-sm text-white font-bold font-san bg-second py-2 px-8 absolute top-5 left-5'>{offer}</button>
            <div className='w-full bg-white absolute bottom-[0px] left-0 opacity-0 group-hover:opacity-100 group-hover:bottom-[97px] py-6 px-8 duration-500 '>
              <Flex className='flex-col items-end gap-y-5 '>
                <p className='text-base text-fivth font-normal font-san hover:font-bold hover:text-second duration-300'>Add to Wish List <FaHeart className='text-second ml-4 inline'/>
                </p>
                <p className='text-base text-fivth font-normal font-san hover:font-bold hover:text-second duration-300'>Compare <FaCodeCompare className='text-second ml-4 inline'/>
                </p>
                <p onClick={addToCart} className='text-base text-fivth font-normal font-san hover:font-bold hover:text-second duration-300'>Add to Cart <FaShoppingCart className='text-second ml-4 inline'/>
                </p>
              </Flex>

            </div>
        </div>

  )
}

export default Cart