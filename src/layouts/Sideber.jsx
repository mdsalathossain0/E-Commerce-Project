import React, { use, useEffect, useRef, useState } from 'react'
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
import axios from 'axios';
import Image from '../components/Image';



const Sideber = () => {


let [allitem, setAllitem] = useState([])
let [find, setFind] = useState([])
let [input, setInput] = useState('')

 let cartRef = useRef(null)

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

let handleHide=()=>{
    setFind([])
    setInput('')
}
useEffect(()=>{
    let total = 0
   data && data.map(item=>{
        total+=item.price*item.quantity
    })
    setTotal(total)
},[data])

useEffect(()=>{
   async function allData() {
        let data =await axios.get('https://dummyjson.com/products')
        setAllitem(data.data.products)
    }
    allData()
})

let handleChange = (e)=>{
    setInput(e.target.value)
  let search =  allitem.filter(item=>item.title.toLowerCase().includes(e.target.value.toLowerCase()))
  setFind(search)
}
// hide cart click random
useEffect(() => {
        const handleOutsideClick = (event) => {
            if (show && cartRef.current && !cartRef.current.contains(event.target)) {
                setShow(false)
            }
        }

        document.addEventListener('mousedown', handleOutsideClick)

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick)
        }
    }, [show])

  return (
    <section className='bg-third py-3 lg:py-6 px-5 '>
        <Container>
            <Flex className='items-center gap-x-1'>
                <div className='w-4/12'>
                    <Flex className='gap-x-3 items-center'>
                    <IoReorderTwo className='text-sm md:text-base lg:text-lg text-second'/>
                    <p className='text-xs md:text-sm lg:text-sm text-second font-normal font-san'>Shop by Category</p>
                    </Flex>
                </div>
                <div className='w-5/12'>
                    <div className='relative'>
                        <input onChange={handleChange} className='w-full bg-white py-2 lg:py-4 pl-5 pr-16 placeholder:text-sm placeholder:text-[#C4C4C4] ' type="text" placeholder='Search Products...'/>
                        <IoSearchSharp className='absolute top-1/2 -translate-y-1/2 right-3 lg:right-5 text-xs md:sm lg:text-base text-second'/>
                     {
                        find.length > 0 &&
                        input.length>0 && 
                        <div className='w-[300px] md:w-[500px] lg:w-[550px] bg-white py-5 px-4 absolute top-[47px] lg:top-[62px] -right-15 lg:left-0 border border-second z-10'>
                        {
                            find.map(item=>(
                                <Link onClick={handleHide} to={`/productdetails/${item.title}`}><div className='flex gap-x-5 items-center py-3 border-b border-first cursor-pointer'><Image className='w-[40px]' src={item.thumbnail}/> {item.title}</div></Link>
                    
                            ))
                        }
                     </div>
                     }
                    </div>
                </div>
                <div className='w-3/12'>
                    <Flex className='gap-x-3 lg:gap-x-10 justify-end'>
                        <div>
                            <Flex className='gap-x-2'>
                                <div><Link to='/myaccount'><FaUser className='text-xs md:text-sm lg:text-base text-first'/></Link> </div>
                                <div><IoMdArrowDropdown className='text-xs md:text-sm lg:text-base text-first'/> </div>
                            </Flex>
                        </div>
                        <FaShoppingCart onClick={()=>(setShow(!show))} className='text-xs md:text-sm lg:text-base text-first'/> 
                    </Flex>
                    {
                        show && <div ref={cartRef} className='w-[250px] md:w-[500px] lg:w-[700px] h-auto bg-black absolute top-0 right-2 lg:right-10 z-10'>
                            <RxCross2 onClick={()=>(setShow(!show))} className='text-xl font-bold text-white m-5'/>
                            <ul className='flex justify-between md:justify-around lg:justify-around text-sm md:text-base lg:text-lg text-white font-bold border border-white py-2 px-6'>
                                <li >Action:</li>
                                <li>Product:</li>
                                <li className='hidden md:block lg:block'>price:</li>
                                <li className='hidden md:block lg:block'> Quantity:</li>
                                <li>Subtotal:</li>
                            </ul>
                            {
                               data && data.length>0 
                                ?
                                
                                data.map(item =>(
                                    

                                    <>
                                        <ul className='relative flex justify-between md:justify-around lg:justify-around items-center text-xs md:text-sm lg:text-base text-white border border-white py-2 px-6 cursor-pointer'>
                                        <li onClick={()=>handleRemove(item)}><RxCross2 /></li>
                                        <li className='md:w-[140px] lg:w-[140px] pl-10'>{(item.title).slice(0,8)}...</li>
                                        <li className='md:[70px] lg:w-[70px] hidden md:block lg:block '>${item.price}</li>
                                        <li className='border border-fivth py-1 px-5 my-5 h-[35px] mr-4 hidden md:block lg:block'>
                                            <span onClick={()=>handleDecrement(item)}>-</span>
                                            <span className='px-2'>{item.quantity}</span>
                                            <span onClick={()=>handleIncrement(item)}>+</span>
                                        </li>
                                        <li className='md:w-[70px] lg:w-[70px] lg:pr-7'>${(item.price*item.quantity).toFixed(2)}</li>

                                        </ul>
                                    </>
                                    
                                ))
                                
                                :
                                <h1 className= 'text-lg md:text-xl lg:text-2xl text-white font-semibold flex items-center justify-center pt-15 md:pt-20 lg:pt-30'>Cart is Empty</h1>
                            }
                              <div className='flex gap-x-3 lg:gap-x-5 pt-12 lg:pt-20 pb-12 lg:pb-20 justify-center'>
                                <Link onClick={()=>(setShow(false))} to='/cart'><button className='text-sm font-bold font-san py-4 px-3 md:px-8 lg:px-10 text-black bg-white border border-transparent hover:bg-transparent hover:text-white hover:border-white'>View cart</button></Link>
                                <Link onClick={()=>(setShow(false))} to='/checkout'><button className='text-sm font-bold font-san py-4 px-3 md:px-8 lg:px-10 text-black bg-white border border-transparent hover:bg-transparent hover:text-white hover:border-white'>Checkout</button></Link>
                              </div>
                            <p className='text-lg md:text-xl lg:text-2xl text-white font-semibold py-5 text-right pr-5 '>Total: ${(total.toFixed(2))}</p>
                        </div>

                    }
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Sideber