import React from 'react'

import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Flex from '../components/Flex'
import Paginate from '../components/Paginate'

const Shop = () => {
  let prev = useSelector((state)=>state.action.prevvalue)
  let current = useSelector((state)=>state.action.currentvalue)
  
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
        <Paginate itemsPerPage={12} />
        </div>
      </Flex>
    </Container>
   </section>
  )
}

export default Shop