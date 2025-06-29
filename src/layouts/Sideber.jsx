import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Button from '../components/Button'
import { IoReorderTwo, IoSearchSharp } from "react-icons/io5";
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';
import { RxCross2 } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, removeItem } from '../slice/addtocard';
import { Link } from 'react-router-dom';



const Sideber = () => {


let [total, setTotal]= useState(0)

let dispatch = useDispatch()    

let [show, setShow] = useState(false)

let data = useSelector((state)=>state.cart.value)

let handleIncrement=(item)=>{
    dispatch(increment(item))
}
let handleDecrement=(item)=>{
    dispatch(decrement(item))
}

let handleRemove=(item)=>{
    dispatch(removeItem(item))
}

useEffect(()=>{
    let total = 0
    data.map(item=>{
        total+=item.price*item.quantity
    })
    setTotal(total)
},[data])

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
                        <FaShoppingCart onClick={()=>(setShow(!show))} className='text-base text-first'/> 
                    </Flex>
                    {
                        show && <div className='w-1/3 h-[730px] bg-black absolute top-0 right-0 z-10'>
                            <RxCross2 onClick={()=>(setShow(!show))} className='text-xl font-bold text-white m-5'/>
                            <ul className='flex justify-between text-white font-bold border border-white py-2 px-6'>
                                <li>Action:</li>
                                <li>Product:</li>
                                <li>price:</li>
                                <li>Quantity:</li>
                                <li>Subtotal:</li>
                            </ul>
                            {
                                data.length>0 
                                ?
                                
                                data.map(item =>(
                                    

                                    <>
                                        <ul className='relative flex justify-between  text-white border border-white py-2 px-6 cursor-pointer'>
                                        <li onClick={()=>handleRemove(item)}><RxCross2 /></li>
                                        <li className='w-[40px] '>{item.title}</li>
                                        <li className=' w-[30px]'>${item.price}</li>
                                        <li className='border border-fivth py-2 px-5 flex gap-x-3'>
                                            <span onClick={()=>handleDecrement(item)}>-</span>
                                            <span>{item.quantity}</span>
                                            <span onClick={()=>handleIncrement(item)}>+</span>
                                        </li>
                                        <li className='w-[20px] '>{item.price*item.quantity}</li>

                                        </ul>
                                    </>
                                    
                                ))
                                
                                :
                                <h1 className='text-2xl text-white font-semibold flex items-center justify-center pt-30'>Cart is Empty</h1>
                            }
                            <span className='text-2xl text-white font-semibold absolute bottom-5 right-5'>Total: {total}</span>
                              <div className='flex gap-x-5 pt-20 justify-center'>
                                <Link to='/cart'><Button className='!text-black !bg-white Hover hover:!bg-transparent hover:!text-white hover:border-white' text='View cart'/></Link>
                                <Link to='/checkout'><Button className='!text-black !bg-white Hover hover:!bg-transparent hover:!text-white hover:border-white' text='Checkout'/></Link>
                              </div>
                        </div>

                    }
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Sideber