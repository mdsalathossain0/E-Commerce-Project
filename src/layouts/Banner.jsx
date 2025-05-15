import React from 'react'
import Image from '../components/Image'

import Bannerimg from '../assets/banner.jpg'
import Slider from 'react-slick';

const Banner = () => {
     const settings = {
    dots: true,
    arrows:false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div>
        <ul> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div>
        0{i + 1}
      </div>
    )
  };
  return (
    
    <section>
        
      <Slider {...settings}>
        
          <div >
         <Image className='w-full' src={Bannerimg}/>
         </div>
          <div >
         <Image className='w-full' src={Bannerimg}/>
         </div>
          <div >
         <Image className='w-full' src={Bannerimg}/>
         </div>
          <div >
         <Image className='w-full' src={Bannerimg}/>
         </div>
        
        
      </Slider>
    

        
    </section>
  )
}

export default Banner