import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Cart from '../components/Cart'


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import SampleNextArrow from '../components/SampleNextArrow'
import SamplePrevArrow from '../components/SamplePrevArrow'
import axios from 'axios'

const Newarival = () => {
   var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow/>,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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

  let [allitem, setAllitem]=useState([])

  useEffect(()=>{
   async function allData() {
    let data =await axios.get('https://dummyjson.com/products')
    setAllitem(data.data.products)
  }
  allData()

  },[])

 
  return (
    <section id='newarival' className='pt-10 lg:pt-[80px] pb-8 lg:pb-[80px] px-5'>
        <Container>
            <SubHeading className='pb-12' text='New Arrivals'/>
            
                
            <Slider {...settings }>

              {
                allitem.map(item=>(
                 <div>
                  <Cart image={item.thumbnail} title={item.title} price={item.price} color='black' offer='New'/>
                 </div>
                ))
              }
             

            </Slider>
           
        </Container>
    </section>
  )
}

export default Newarival