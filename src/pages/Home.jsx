import React from 'react'
import Image from '../components/Image'
import Facelity from '../layouts/Facelity'
import Offers from '../layouts/Offers'


import Bannerimg from '../assets/banner.jpg'

import Newarival from '../layouts/Newarival'
import Bestseller from '../layouts/Bestseller'
import Phone from '../layouts/Phone'
import SpecialOffer from '../layouts/SpecialOffer'


const Home = () => {
  return (
    <>
    
    <div >
      <Image className='w-full' src={Bannerimg}/>
    </div>

    <Facelity/>
    <Offers/>
    <Newarival/>
    <Bestseller/>
    <Phone/>
    <SpecialOffer/>
      
    </>
    
  )
}

export default Home