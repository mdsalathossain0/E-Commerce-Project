import React, { useState } from 'react'

import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Flex from '../components/Flex'
import Paginate from '../components/Paginate'
import Paginate2 from '../components/Paginate2'
import { CgLayoutGrid, CgLayoutList } from 'react-icons/cg'
import { BsPlus } from 'react-icons/bs'
import { BiMinus } from 'react-icons/bi'
import Category from '../components/Category'
import Subcategory from '../components/Subcategory'

const Shop = () => {
  let prev = useSelector((state)=>state.action.prevvalue)
  let current = useSelector((state)=>state.action.currentvalue)

  let category = useSelector((state)=>state.category.value)


  let [show, setShow] = useState(true)
  let [show2, setShow2] = useState(false)
  

  let handleClick1=()=>{
      setShow(true)
      setShow2(false)
  }
  let handleClick2=()=>{
    setShow2(true)
    setShow(false)
  }
  


  return (
   <section className='py-15 lg:py-26 px-5'>
    <Container>
      <SubHeading text='Shop'/>
      <p className='text-xs lg:text-sm text-first font-normal font-san pb-15 lg:pb-[136px]'>
        {prev && current !== prev && current === 'Shop' ? (<Link to={prev === 'Home' ? '/':`/${prev}`}> {`${prev} >`} </Link>) :null}
         Shop</p>
      <Flex className='flex-col lg:flex-row gap-y-5'>
        <div className='w-full lg:w-3/12 pr-6 lg:pr-10'> 
        <h5 className='text-base md:text-lg lg:text-xl text-second font-bold font-san pb-4'>Shop by Category</h5>
              <Category text='Phone' type='true'/>
               {
                category &&
                
               <>
               <Subcategory text='Iphone'/>
               <Subcategory text='Xioami'/>
               <Subcategory text='vivo'/>
               <Subcategory text='Itel'/>
               </>
               }
              <Category text='Desktop' type='false'/>
               {
                category &&
                
               <>
               <Subcategory text='Dell'/>
               <Subcategory text='HP'/>
               <Subcategory text='Asus'/>
               <Subcategory text='Lenevo'/>
               </>
               }
              <Category text='Watch' type='true'/>
               {
                category &&
                
               <>
               <Subcategory text='Dell'/>
               <Subcategory text='HP'/>
               <Subcategory text='Asus'/>
               <Subcategory text='Lenevo'/>
               </>
               }


        </ div>
        <div className='w-9/12 '>
        <div className='pb-10 lg:pb-14 flex justify-between items-center'>
         <div>          
          <Flex className='gap-x-3 lg:gap-x-5'>
          <div onClick={handleClick1} ><CgLayoutGrid className='text-2xl md:text-3xl lg:text-[42px] text-first hover:bg-second hover:text-white border border-sixth duration-300' /></div>
          <div onClick={handleClick2}><CgLayoutList className='text-2xl md:text-3xl lg:text-[42px] text-first hover:bg-second hover:text-white border border-sixth duration-300' /></div>
        </Flex>
        </div>
        <div className='flex gap-x-10'>
          <Flex className='gap-x-4 items-center '>
          <p className='text-sm lg:text-base text-first font-san font-normal leading-7'>Sort by:</p>
          <select className='text-sm lg:text-base text-first font-san font-normal leading-7 py-2 px-3 lg:px-5
          border border-sixth'>
            <option value="">Red</option>
            <option value="">Blue</option>
            <option value="">Green</option>
          </select>
        </Flex>
        <div className='hidden lg:block'>
          <Flex className='gap-x-4 items-center '>
          <p className='text-base text-first font-san font-normal leading-7'>Show:</p>
          <select className='text-base text-first font-san font-normal leading-7 py-2 px-5
          border border-sixth'>
            <option value="">6</option>
            <option value="">12</option>
            <option value="">24</option>
            <option value="">36</option>
          </select>
        </Flex>
        </div>
        </div>
        </div>
        {
          show  && <Paginate itemsPerPage={12} /> 
        }
        {
          show2  && <Paginate2 itemsPerPage={12} /> 
        }
        </div>
      </Flex>
    </Container>
   </section>
  )
}

export default Shop