import React from 'react'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Image from '../components/Image'
import Flex from '../components/Flex'
import Button from '../components/Button'
import { IoIosArrowForward } from 'react-icons/io'

import Image1 from '../assets/cart1.png'
import Image2 from '../assets/productdetails1.png'
import AboutCard from '../components/AboutCard'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const About = () => {
  let prev = useSelector((state)=>state.action.prevvalue)
  let current = useSelector((state)=>state.action.currentvalue)
  return (
   <section className='py-15 lg:py-26 px-5'>
    <Container>
     <SubHeading text='About'/>
      <p className='text-xs lg:text-sm text-first font-normal font-san pb-15 lg:pb-[136px]'> {prev && prev !== current && current === 'About' ? (
            
              <Link to={prev === 'Home' ? '/' : `/${prev}`}>
                {`${prev}  >`}
              </Link>
            
          ) : null}
          About </p>
     <Flex className='flex-col lg:flex-row justify-center lg:justify-between gap-y-10 lg:gap-y-0'>
      <div className='w-full lg:w-w49 relative'><Image className='w-full' src={Image1}/>
      <Button className='absolute bottom-6 left-1/2 -translate-x-1/2' text='Our Brands'/>
      </div>
      <div className='w-full lg:w-w49 relative'><Image className='w-full' src={Image2}/>
      <Button className='absolute bottom-6 left-1/2 -translate-x-1/2' text='Our Stores'/>
      </div>
     </Flex>
     <p className='text-2xl md:text-[28px] lg:text-[39px] text-second font-normal font-san leading-8 lg-leading-13 pt-12 lg:pt-26 pb-10 lg:pb-23'>Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</p>
     <Flex className='flex-col lg:flex-row justify-center lg:justify-between'>
      <AboutCard title='Our Vision' text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book."/>
      <AboutCard title='Our Story' text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic."/>
      <AboutCard title='Our Brands' text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."/>
     </Flex>
    </Container>
   </section>
  )
}

export default About