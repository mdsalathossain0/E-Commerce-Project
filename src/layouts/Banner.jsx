import React from 'react'
import Image from '../components/Image'

import Bannerimg from '../assets/banner.jpg'
import Bannerimg1 from '../assets/banner1.png'
import Bannerimg2 from '../assets/banner2.png'
import Bannerimg3 from '../assets/banner3.png'
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
    ),
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    
    <section>
        
      <Slider {...settings}>
        
          <div className='w-full h-[260px] md:h-[380px] lg:h-[600px]'>
         <Image className='w-full h-full' src={Bannerimg}/>
         </div>
          <div className='w-full h-[260px] md:h-[380px] lg:h-[600px]'>
         <Image className='w-full h-full' src={Bannerimg1}/>
         </div>
          <div className='w-full h-[260px] md:h-[380px] lg:h-[600px]'>
         <Image className='w-full h-full' src={Bannerimg2}/>
         </div>
          <div className='w-full h-[260px] md:h-[380px] lg:h-[600px]'>
         <Image className='w-full h-full' src={Bannerimg3}/>
         </div>
        
        
      </Slider>
    

        
    </section>
  )
}

export default Banner