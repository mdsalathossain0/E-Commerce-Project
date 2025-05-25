import React from 'react'

import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Shop = () => {
  let data = useSelector((state)=>state.action.prevvalue)
  return (
   <section className='py-26'>
    <Container>
      <SubHeading text='Shop'/>
      <p className='text-sm text-first font-normal font-san pb-[136px]'><Link to={data=="Home" ? "/": `/${data}`}>{data==null ? '': `${data} >`}</Link> Shop</p>
    </Container>
   </section>
  )
}

export default Shop