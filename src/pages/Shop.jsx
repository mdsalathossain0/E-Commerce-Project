import React, { useState } from 'react'

import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Flex from '../components/Flex'
import Paginate from '../components/Paginate'
import Paginate2 from '../components/Paginate2'
import { CgLayoutGrid, CgLayoutList } from 'react-icons/cg'

const Shop = () => {
  let prev = useSelector((state)=>state.action.prevvalue)
  let current = useSelector((state)=>state.action.currentvalue)

  let [show, setShow] = useState(false)
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
   <section className='py-26'>
    <Container>
      <SubHeading text='Shop'/>
      <p className='text-sm text-first font-normal font-san pb-[136px]'>
        {prev && current !== prev && current === 'Shop' ? (<Link to={prev === 'Home' ? '/':`/${prev}`}> {`${prev} >`} </Link>) :null}
         Shop</p>
      <Flex>
        <div className='w-3/12 '> catagory</ div>
        <div className='w-9/12 '>
        <div className='pb-14 flex justify-between'>
         <div>          
          <Flex className='gap-x-5'>
          <div onClick={handleClick1} ><CgLayoutGrid className='text-[42px] text-first hover:bg-second hover:text-white border border-sixth duration-300' /></div>
          <div onClick={handleClick2}><CgLayoutList className='text-[42px] text-first hover:bg-second hover:text-white border border-sixth duration-300' /></div>
        </Flex>
        </div>
        <div className='flex gap-x-10'>
          <Flex className='gap-x-4 items-center'>
          <p className='text-base text-first font-san font-normal leading-7'>Sort by:</p>
          <select className='text-base text-first font-san font-normal leading-7 py-2 px-5
          border border-sixth'>
            <option value="">Red</option>
            <option value="">Blue</option>
            <option value="">Green</option>
          </select>
        </Flex>
        <Flex className='gap-x-4 items-center'>
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