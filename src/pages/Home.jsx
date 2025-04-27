import React from 'react'
import Image from '../components/Image'


import Bannerimg from '../assets/banner.jpg'
import Facelity from '../components/Facelity'
import Offers from '../layouts/Offers'


const Home = () => {
  return (
    <>
    
    <div >
      <Image className='w-full' src={Bannerimg}/>
    </div>

    <Facelity/>
    <Offers/>
      
    </>
    
  )
}

export default Home