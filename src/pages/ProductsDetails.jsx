import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Button from '../components/Button'


import { FaStar } from 'react-icons/fa'
import { MdAdd } from 'react-icons/md'
import Input from '../components/Input'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { RxCross2 } from 'react-icons/rx'


const ProductsDetails = () => {

    let [detail, setDetail]=useState(false)
    let [detail2, setDetail2]=useState(false)

    let [ show, setShow]=useState(false)
    let [ show2, setShow2]=useState(true)

    let handleShow=()=>{
        setShow(true)
        setShow2(false)
    }
    let handleShow2=()=>{
        setShow2(true)
        setShow(false)
    }
    let handleDetails=()=>{
        setDetail(!detail)
    }
    let handleDetails1=()=>{
        setDetail2(!detail2)
        
    }
    let [allitem, setAllitem]= useState([])

    let singleProduct = useParams()

    useEffect(()=>{
       async function allData(){
            let data = await axios.get('https://dummyjson.com/products')
            setAllitem(data.data.products)
        }
        allData()
    },[])

    useEffect(()=>{
        window.scrollTo({top:0})
    },[])

  return (
    <section className='py-15 lg:py-20 px-5'>
        <Container>
            

        {
            allitem.map(item=>{
                if(item.title===singleProduct.title){
                return <>
                 <div className='w-full md:w-[400px] h-[230px] md:h-[300px] mt-10 lg:mt-20'><Image className='w-full h-full' src={item.thumbnail}/></div>
                 <h4 className='text-2xl md:text-[28px] lg:text-[39px] text-second font-bold font-san pt-5'>{item.title}</h4>
            <Flex className='gap-x-6 items-center pt-4 pb-6'>
                <ul className='flex gap-x-[2px] '>
                    <li className='text-sm text-[#FFD881]'><FaStar /></li>
                    <li className='text-sm text-[#FFD881]'><FaStar /></li>
                    <li className='text-sm text-[#FFD881]'><FaStar /></li>
                    <li className='text-sm text-[#FFD881]'><FaStar /></li>
                    <li className='text-sm text-[#FFD881]'><FaStar /></li>
                </ul>
                <p className='text-sm text-fivth font-normal font-san'>{item.reviews.length} Review</p>
            </Flex>
            <Flex className=' gap-x-[22px] items-center pb-7 border-b-3 border-sixth w-full lg:w-[49%]'>
                <h5 className= 'text-sm lg:text-base text-fivth font-normal font-san'><del>$88.00</del></h5>
                <h5 className='text-base md:text-lg lg:text-xl text-second font-bold font-san'>${item.price}</h5>
            </Flex>
            <Flex className='gap-x-13 items-center pt-14'>
                <h4 className='text-sm lg:text-base text-second font-bold font-san leading-6'>COLOR:</h4>
                <ul className='flex gap-x-4'>
                    <li className='w-[20px] h-[20px] rounded-full bg-[#979797] hover:scale-[1.5] duration-300'></li>
                    <li className='w-[20px] h-[20px] rounded-full bg-[#FF8686] hover:scale-[1.5] duration-300'></li>
                    <li className='w-[20px] h-[20px] rounded-full bg-[#7ED321] hover:scale-[1.5] duration-300'></li>
                    <li className='w-[20px] h-[20px] rounded-full bg-[#B6B6B6] hover:scale-[1.5] duration-300'></li>
                    <li className='w-[20px] h-[20px] rounded-full bg-[#15CBA5] hover:scale-[1.5] duration-300'></li>
                </ul>
            </Flex>
            <Flex className='gap-x-[75px] items-center pt-14'>
                <h4 className='text-sm lg:text-base text-second font-bold font-san leading-6'>SIZE:</h4>
                <select className='py-2 px-8 border border-sixth'>
                    <option value="S">S</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
            </Flex>
            <Flex className='gap-x-7 items-center pt-14 pb-7 border-b-3 border-sixth w-full lg:w-[49%]'>
                <h4 className='text-sm lg:text-base text-second font-bold font-san leading-6'>QUANTITY:</h4>
                <Flex className='gap-x-9 py-2 px-8 border border-sixth '>
                    <div>-</div>
                    <div>1</div>
                    <div>+</div>
                </Flex>
            </Flex>
            <Flex className='gap-x-7 items-center pt-14 pb-7 border-b-3 border-sixth w-full lg:w-[49%]'>
                <h4 className='text-sm lg:text-base text-second font-bold font-san leading-6'>STATUS:</h4>
                <p className='text-base text-fivth font-normal font-san leading-7'>{item.availabilityStatus}</p>
                
            </Flex>
            <Flex className='gap-x-5 pt-7 pb-7 border-b-3 border-sixth w-full lg:w-[49%]'>
                <Button text='Add to Wish List'/>
                <div><Button text='Add to Cart'/></div>
            </Flex>
            <div className='border-b-3 border-sixth w-full lg:w-[49%] pb-5'>
                <Flex className='justify-between  gap-x-7 items-center pt-14 pb-7  '>
                <h4 className='text-sm lg:text-base text-second font-bold font-san leading-6'>FEATURES & DETAILS</h4>
                <div onClick={handleDetails}>{detail ? <RxCross2 className='text-xl text-second font-bold'/>:<MdAdd  className='text-xl text-second font-bold'/> } </div>
            </Flex>
                    {
                        detail && 
                        <>
                        <ul className='flex flex-col gap-y-5'>
                        <li className='list-none text-sm lg:text-base text-first font-normal font-san leading-8'>Brand: {item.brand}</li>
                        <li className='list-none text-sm lg:text-base text-first font-normal font-san leading-8'>Model: {item.sku}</li>
                        <li className='list-none text-sm lg:text-base text-first font-normal font-san leading-8'>Weight: {item.weight} gm</li>
                        <li className='list-none text-sm lg:text-base text-first font-normal font-san leading-8'>Warranty: {item.warrantyInformation}</li>
                        </ul>
                        </>
                    }
            </div>
            <div className='border-b-3 border-sixth w-full lg:w-[49%] pb-5'>
                <Flex className='justify-between  gap-x-7 items-center pt-14 pb-7 '>
                <h4 className='text-sm lg:text-base text-second font-bold font-san leading-6'>SHIPPING & RETURNS</h4>
                <div onClick={handleDetails1}>{detail2 ? <RxCross2 className='text-xl text-second font-bold'/>:<MdAdd  className='text-xl text-second font-bold'/> }</div>
            </Flex>
             {
                detail2 && 
                <>
                <ul className='flex flex-col gap-y-5'>
                        <li className='list-none text-sm lg:text-base text-first font-normal font-san leading-8'>ShippingInformation: {item.shippingInformation}</li>
                        <li className='list-none text-sm lg:text-base text-first font-normal font-san leading-8'>ReturnPolicy: {item.returnPolicy}</li>
                        </ul>
                </>
             }
            </div>
            <p className='w-full lg:w-[49%] text-sm lg:text-base text-first font-normal font-san leading-8 pt-7 pb-15 lg:pb-[122px]'>{item.description}</p>
            <Flex className='gap-x-15 pb-10'>
                <div onClick={handleShow}>
                    <h5  className='text-xl text-first font-normal font-san leading-7'>Description</h5>
                    
                </div>
                <h5 onClick={handleShow2} className='text-xl text-second font-bold font-san leading-7'>Reviews (1)</h5>
            </Flex>
            <p className='text-sm text-first font-normal font-san leading-7 pb-4 border-b-2 border-sixth'>{item.reviews.length} review for Product</p>
            <Flex className='flex-col lg:flex-row gap-y-10 lg:gap-y-0 lg:justify-between lg:items-center pt-4 '>
                <div className='flex items-center gap-x-9'>
                    {
                        show2 && <p className='text-sm text-second font-normal font-san'>{item.reviews[0].reviewerName}</p>
                    }
                    {
                        show && <p className='text-sm lg:text-base text-first font-normal font-san leading-8 pt-7 pb-4 border-b-2 border-sixth'>{item.description}</p>
                    }
                {
                    show2 && 
                    <ul className='flex gap-x-[2px] '>
                    <li className='text-sm text-[#FFD881]'><FaStar /></li>
                    <li className='text-sm text-[#FFD881]'><FaStar /></li>
                    <li className='text-sm text-[#FFD881]'><FaStar /></li>
                    <li className='text-sm text-[#FFD881]'><FaStar /></li>
                    <li className='text-sm text-[#FFD881]'><FaStar /></li>
                </ul>
                }
                </div>
                <div>
                    <p className='text-base text-first font-normal font-san'>6 months ago</p>
                </div>
            </Flex>
            {
                show2 && <p className='w-[95%] text-base text-first font-normal font-san leading-8 pt-7 pb-4 border-b-2 border-sixth'>{item.reviews[0].comment}</p>
            }
            <h5 className='text-xl text-second font-bold font-san leading-7 pt-13 pb-7 lg:pb-12'>Add a Review</h5>
            <Input className='w-full lg:w-w49' type='text' text='Name' check='name' placeholder='Your name here'/>
            <Input className='w-full lg:w-w49' type='email' text='Email' check='email' placeholder='Your email here'/>
            <Input className='w-full lg:w-w49' type='textarea' text='Review' check='review' placeholder='Your review here'/>
            <div className='pt-6 pb-15 lg:pb-[250px]'>
                <Button text='Post'/>
            </div>
                </>
                }
            })
        }

            
            
            
        </Container>
    </section>
  )
}

export default ProductsDetails