import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Cart from '../components/Cart'


import Cart1 from '../assets/cart1.png'
import Cart2 from '../assets/cart2.png'
import Cart3 from '../assets/cart3.png'
import Cart4 from '../assets/cart4.png'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import SampleNextArrow from '../components/SampleNextArrow'
import SamplePrevArrow from '../components/SamplePrevArrow'
import axios from 'axios'

const Newarival = () => {
   var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>
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
    <section className='pt-15 lg:pt-[128px] pb-15 lg:pb-[118px]'>
        <Container>
            <SubHeading className='pb-12' text='New Arrivals'/>
            
                
            <Slider {...settings}>

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