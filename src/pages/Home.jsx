import React from 'react'
import Image from '../components/Image'
import Facelity from '../layouts/Facelity'
import Offers from '../layouts/Offers'


import Bannerimg from '../assets/banner.jpg'
import Cart from '../components/Cart'


const Home = () => {
  return (
    <>
    
    <div >
      <Image className='w-full' src={Bannerimg}/>
    </div>

    <Facelity/>
    <Offers/>
    <Cart/>
      
    </>
    
  )
}

export default Home