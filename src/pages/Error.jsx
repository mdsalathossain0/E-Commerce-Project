import React from 'react'
import Container from '../components/Container'
import Image from '../components/Image'
import Button from '../components/Button'

import Errorimg from '../assets/error.png'
import { IoSearchSharp } from 'react-icons/io5'

const Error = () => {
  return (
    <section className='py-26'>
      <Container>
        <Image src={Errorimg}/>
        <p className='w-[644px] text-base text-first font-normal font-san leading-8 py-12'>The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?</p>
        <div className='w-[644px]  relative'>
          <input className='w-full py-4 px-5 pr-24 border border-sixth'  type="search" placeholder='Type to search'/>
          <IoSearchSharp className='absolute top-1/2 right-5 -translate-y-1/2'/>

        </div>
       <div className='pt-15'>
         <Button text='Back to Home'/>
       </div>
      </Container>
    </section>
  )
}

export default Error